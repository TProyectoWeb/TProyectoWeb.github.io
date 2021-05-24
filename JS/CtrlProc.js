"use strict";
var
salidaBoleta = document.getElementById("salidaBoleta"),
salidaNombre = document.getElementById("salidaNombre"),
salidaGrupo = document.getElementById("salidaGrupo"),
salidaMateria = document.getElementById("salidaMateria"),
salidaFecha = document.getElementById("salidaFecha");


function procesa(){
  var boleta = parseInt(forma["boleta"].value),
  nombre = forma["nombre"].value,
  grupo = forma["grupo"].value,
  materia = forma["materia"].value;
  //var fecha = forma["fecha"].value;
   

    salidaBoleta.value = "Tu boleta es: " + boleta;
    salidaNombre.value = "Tu nombre es: " + nombre;
    salidaGrupo.value = "Tu grupo es: " + grupo;
    salidaMateria.value = "La materia es: " + materia;    
}
