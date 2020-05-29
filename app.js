const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/hmtl/login.html");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/hmtl/cadastro.html");
});
app.get("/", function(req, res){
    res.sendFile(__dirname + "/hmtl/paginaPrincipal.html");
});
app.get("/", function(req, res){
    res.sendFile(__dirname + "/hmtl/curiosidades.html");
});
app.get("/", function(req, res){
    res.sendFile(__dirname + "/hmtl/animes.html");
});
app.get("/", function(req, res){
    res.sendFile(__dirname + "/hmtl/imagens.html");
});




app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081")
});