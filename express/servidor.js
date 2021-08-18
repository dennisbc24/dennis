var cafecito = require('express');
var aplicacion = cafecito();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("hola hola");
}
function cursos(peticion, resultado)
{
    resultado.send("cursillos");
}
aplicacion.listen(8989);