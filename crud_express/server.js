const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function() {
    console.log('listening on ' + port)
});

//COMPROBAR FUNCIONAMIENTO DE SERVER:
// app.get('/', (req, res) => {
//     res.send("Hola Mundo!")
// })