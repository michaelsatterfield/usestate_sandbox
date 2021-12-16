
const express = require ("express");
const app = express();


app.get('/', function (request, response){
    response.send("<h1>Hola Amigos/as</h1>")
})
app.listen(3001, function (){
    console.log("server started on port 3001")
} )


