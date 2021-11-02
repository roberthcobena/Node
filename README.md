# Node
 Proyectos con Node y base de datos relacional y no relacional

# Intrucciones
Utilizar Postman para consumir, esto es un backend rápido, al momento lo he hecho para el entendimiento y uso de datos provenientes de MongoDb, bajo un API REST desarrollado en NODE, peor tambien puede ser usado con base de datos relacinales (SQL - MYSQL)

# Ejemplo: insercion - consulta - modificación - consulta - Eliminación - Consulta
GET || http://localhost:3000/product

POST || http://localhost:3000/product
{
    "name": "pelota",
    "price": "15.00"
},
{
    "name": "diadema",
    "price": "10.00"
}


PUT || http://localhost:3000/product/diadema
{
    "name": "diadema",
    "price": "40.00"
}

DELETE || http://localhost:3000/product/diadema
