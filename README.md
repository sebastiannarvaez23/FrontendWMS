# Levantando aplicación WMS

## Preparación del entorno
1. Se debe tener instalado:
    - (PostgreSQL) 15.0
    - Python 3.10.5
    - node v16.16.0

## Levantando el servidor web api
1. Instale el entorno virtual de python 3 con `$ python3 -m venv venv`
2. Active el entorno con el siguiente comando:
    - Linux: `$ source venv/bin/activate`
    - windows: `$ venv/Scripts/activate`
3. Instale las dependencias parandose en la ruta raiz del proyecto ConformacionHogarServices/ y ejecutando el comando `$ pip install -r requiriments.txt`.
4. Cree una base de datos en Postgres con el nombre de "chsprueba" o bien ejecute el siguiente sql sobre la shell de postgres `>> CREATE DATABASE chsprueba;`
5. Prepare las migraciones de los modelos. Debe ubicarse sobre la ruta raiz del proyecto ConformacionHogarServices/ y ejecutar `$ python manage.py makemigrations`
6. Envie las migraciones a la base de datos. Debe ubicarse sobre la ruta raiz del proyecto ConformacionHogarServices/ y ejecutar `$ python manage.py migrate`

## Levantando el frontend
1. Ejecute el comando `$ npm install`
2. Ejecute el comando `$ npm start`

Levante cada entorno en una terminal diferente y rectifique que le backend salga por el puerto 8000

### End