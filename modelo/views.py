import pandas as pd
import numpy as np
from datetime import datetime
import holidays
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from tensorflow.keras.models import load_model
import json

# Cargar el modelo de red neuronal
model = load_model('path/to/your/model.h5')

# Función para obtener la estación del año
def get_season(date):
    Y = 2000  # año bisiesto para asegurar que febrero tiene 29 días
    seasons = [('winter', (datetime(Y, 1, 1), datetime(Y, 3, 20))),
               ('spring', (datetime(Y, 3, 21), datetime(Y, 6, 20))),
               ('summer', (datetime(Y, 6, 21), datetime(Y, 9, 22))),
               ('autumn', (datetime(Y, 9, 23), datetime(Y, 12, 20))),
               ('winter', (datetime(Y, 12, 21), datetime(Y, 12, 31)))]

    date = date.replace(year=Y)
    for season, (start, end) in seasons:
        if start <= date <= end:
            return season
    return None

@csrf_exempt
def predict_consumption(request):
    if request.method == 'POST':
        try:
            # Leer los datos del archivo CSV enviado en la solicitud
            file = request.FILES['file']
            df = pd.read_csv(file)

            # Convertir la columna 'DateTime' al tipo de datos datetime
            df['DateTime'] = pd.to_datetime(df['DateTime'])
            df = df.set_index('DateTime')
            df = df.sort_index()

            # Crear la columna 'Day' en inglés
            df['Day'] = df.index.day_name()

            # Mapear los nombres de los días del inglés al español
            day_map = {'Monday':'Lunes', 'Tuesday':'Martes', 'Wednesday':'Miércoles', 'Thursday':'Jueves', 'Friday':'Viernes', 'Saturday':'Sábado', 'Sunday':'Domingo'}
            df['Day'] = df['Day'].map(day_map)

            # Crear la columna 'Day of the year'
            df['Day of the year'] = df.index.dayofyear

            # Crear la columna 'Fortnight' basada en el 'Day of the year'
            df['Fortnight'] = np.ceil(df['Day of the year'] / 15).astype(int)

            # Crear la columna 'Section of the day'
            df['Section of the day'] = pd.cut(df.index.hour, bins=[0,5,11,17,23], labels=['0','1','2','3'], include_lowest=True)

            # Convertir las columnas 'Day' y 'Section of the day' a variables dummy
            df = pd.get_dummies(df, columns=['Day', 'Section of the day'])

            # Añadir columna de Días Laborales vs Fines de Semana
            df['Fin de semana'] = df.index.weekday >= 5

            # Añadir columna de Estación del Año
            df['Estacion del año'] = df.index.map(lambda date: get_season(date))

            # Convertir la columna 'Estacion del año' a variables dummy
            df = pd.get_dummies(df, columns=['Estacion del año'])

            # Agregar columna de si es festivo en Marruecos
            morocco_holidays = holidays.Morocco()
            df['Is Holiday'] = df.index.map(lambda date: date in morocco_holidays).astype(int)

            # Rellenar valores faltantes en las columnas dummy que podrían no estar presentes en los nuevos datos
            expected_columns = [
                'Day_Domingo', 'Day_Jueves', 'Day_Lunes', 'Day_Martes', 'Day_Miércoles', 'Day_Sábado', 'Day_Viernes',
                'Section of the day_0', 'Section of the day_1', 'Section of the day_2', 'Section of the day_3',
                'Estacion del año_autumn', 'Estacion del año_spring', 'Estacion del año_summer', 'Estacion del año_winter'
            ]
            for col in expected_columns:
                if col not in df:
                    df[col] = 0

            # Asegurarse de que las columnas estén en el mismo orden que las del modelo
            df = df.reindex(columns=expected_columns, fill_value=0)

            # Asegurar que las columnas del DataFrame coincidan con las del modelo entrenado
            df = df[['Temperature', 'Humidity', 'Wind Speed', 'poblacion', 'Day of the year', 'Fortnight', 'Day_Domingo', 'Day_Jueves',
                     'Day_Lunes', 'Day_Martes', 'Day_Miércoles', 'Day_Sábado', 'Day_Viernes', 'Section of the day_0',
                     'Section of the day_1', 'Section of the day_2', 'Section of the day_3', 'Fin de semana',
                     'Estacion del año_autumn', 'Estacion del año_spring', 'Estacion del año_summer',
                     'Estacion del año_winter', 'Is Holiday']]

            # Realizar predicciones
            predictions = model.predict(df.values)

            # Añadir las predicciones al DataFrame
            df['Predicted Consumption'] = predictions

            # Convertir el DataFrame a JSON para enviarlo como respuesta
            result = df[['Predicted Consumption']].to_json(orient='index')

            return JsonResponse(json.loads(result), safe=False)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
