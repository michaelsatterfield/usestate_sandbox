
const express = require ("express");
const app = express();


app.get('/', function (request, response){
    response.send("<h1>Hola Amigos/as</h1>")
})

app.get("/contact", function (req,res){
    res.send("<h1>     Contact Us</h1>")
})

app.get("/about", function (req,res){
    res.send("<h1>I'm Michael im a developer.</h1>")
})
app.listen(3001, function (){
    console.log("server started on port 3001")
} )


