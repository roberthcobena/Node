const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient

app.listen(3000, function() {
    console.log('listening on ' + port)
});
//CONEXION
MongoClient.connect('mongodb://localhost/crud', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

//COMPROBAR FUNCIONAMIENTO DE SERVER:
// app.get('/', (req, res) => {
//     res.send("Hola Mundo!")
// })

//VARIABLES para Métodos CRUD
let db;
let collection;
MongoClient.connect('mongodb://localhost/crud', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    db = client.db('crud')
    collection = db.collection('product')
})

//MÉTODOS DEL CRUD: GET (CONSULTA)
app.get('/product', (req, res) => {
    db.collection('product').find().toArray()
        .then(results => {
            res.json(results);
        }).catch(error => console.error(error));
})

//MÉTODOS DEL CRUD: POST
app.post('/product', (req, res) => {
    collection.insertOne(req.body)
        .then(result => {
            res.json('Success');
        })
        .catch(error => console.error(error))
})

//MÉTODOS DEL CRUD: PUT
app.put('/product/:id', (req, res) => {
    collection.findOneAndUpdate({ name: req.params.id }, {
            $set: {
                name: req.body.name,
                price: req.body.price
            }
        }, {
            upsert: true
        }).then(result => { res.json('Updated') })
        .catch(error => console.error(error))
});

//MÉTODOS DEL CRUD: DELETE
app.delete('/product/:id', (req, res) => {
    collection.deleteOne({ name: req.params.id })
        .then(result => {
            res.json('Deleted')
        })
        .catch(error => console.error(error))
})