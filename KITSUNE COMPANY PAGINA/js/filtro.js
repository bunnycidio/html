let view=document.getElementById("divfiltros");
function actfiltro() {
    if (view.hasAttribute('hidden')) {
        view.removeAttribute("hidden");
    }
    else {
        view.setAttribute("hidden", 'true');
        seleccionfiltro("juego");
    }
}
seleccionfiltro("juego") // Ejecuta la función y muestra todas las imágenes
function seleccionfiltro(c) {
  var x, i;
  x = document.getElementsByClassName("juego");
  if (c == "juego") c = "";
  // Agrega la class "show" (display:block) a los elementos filtrados, y elimina la class "show"  de los elementos que no son seleccionados
  for (i = 0; i < x.length; i++) {
    agregarclase(x[i], "ocultas");
    if (x[i].className.indexOf(c) > -1) quitarclase(x[i],"ocultas");
  }
}
function seleccioncarro(w){
  var x, i;
  x = document.getElementsByClassName("opciones");
  if (w == "opciones") w = "";
  // Agrega la class "show" (display:block) a los elementos filtrados, y elimina la class "show"  de los elementos que no son seleccionados
  for (i = 0; i < x.length; i++) {
    agregarclase(x[i], "ocultas");
    if (x[i].className.indexOf(w) > -1) quitarclase(x[i],"ocultas");
  }
}

// Muestra los elementos filtrados
function agregarclase(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");//coloca espacio blanco a arrays
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Oculta los elementos que no son seleccionados
function quitarclase(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");//coloca espacio blanco a arrays
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Agrega class active al botón actual (iluminado)
var btnContainer = document.getElementById("filtros");
var btns = document.getElementsByClassName("filtro");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
