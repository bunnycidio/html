const Clickbutton = document.querySelectorAll('.bot_agcarrito')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target;
  const item = button.closest('.juego')
  const itemTitle = item.querySelector('.nom_juego').textContent.trim();
  const itemPrice = item.querySelector('.pre_juego').textContent;
  const itemImg = item.querySelector('.img_juego').src;

  if (button.hasAttribute('hidden')) {
    button.removeAttribute("hidden");
  }
  else {
      button.setAttribute("hidden", 'true');
  }

  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  console.log(newItem)
  carrito.push(newItem)
  console.log(carrito)
  var precio = Number(newItem.precio.replace("$",""));
  var subtotal = precio*newItem.cantidad
  console.log(precio,subtotal)
  let nodotd =document.createElement('tr');
  nodotd.classList.add("agregado")
  let plantilla =`
  <td class="#"style="vertical-align : middle;">1</td>
            
  <td class="pro"><img class="img" src="${newItem.img}" alt=""><span class="nom"> ${newItem.title} </span></td>

  <td class="cantidad"style="vertical-align : middle;">
      <input type="number" min="1" value="${newItem.cantidad}"cantidad"style="vertical-align : middle;">
  </td>

  <td class="preciou"style="vertical-align : middle;">${newItem.precio}</td>

  <td class="subtotal"style="vertical-align : middle;">$${subtotal}</td>

  <td class="bot" style="vertical-align : middle;" ><button class="borrar"><i class="fas fa-trash-alt"></i></button></td>
`
nodotd.innerHTML=plantilla
let tbody=document.querySelector('#tbody')
tbody.appendChild(nodotd)
asignarborrar();
asignarcantidad();
actualizartotal();
}
function actualizartotal() {
  var subtotales = document.querySelectorAll(".subtotal")
  var ppago = document.getElementById("PAGO")
  let total=0;
  subtotales.forEach(subs =>{
    var valorpal= subs.textContent;
    var valor = Number(valorpal.replace("$",""))
    total+=valor;
  })
  ppago.innerHTML=total
}
function asignarborrar() {
  var botborr=document.querySelectorAll(".borrar")
  console.log(botborr)
  botborr.forEach(btn =>{
  btn.addEventListener('click', quitarprocarro);
  })
}
function asignarcantidad(){
  var inputcant=document.querySelectorAll(".cantidad")
  console.log(inputcant)
  inputcant.forEach(inp =>{
    inp.addEventListener('change',cambiocantidad)
  })
}
function cambiocantidad(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  var tr = input.closest(".agregado");
  var pre = tr.querySelector(".preciou").textContent;
  var precio = Number(pre.replace("$",""));
  var cant = input.value;
  var subtotal = precio*cant;
  var sub = tr.querySelector(".subtotal")
  sub.innerHTML='$'+subtotal;
  console.log(pre,precio,cant,subtotal,sub)
  actualizartotal();
}


function quitarprocarro(event) {
  const buttonClicked = event.target;
  var tr = buttonClicked.closest(".agregado")
  var nombre = tr.querySelector(".nom").textContent.trim();
  console.log(nombre)
  var juegos=document.querySelectorAll(".juego")
  juegos.forEach(juego =>{
    var nom = juego.querySelector('.nom_juego').textContent.trim();
    var boton=juego.querySelector('.bot_agcarrito')
    if (nom==nombre) {
      boton.removeAttribute("hidden")
    }
    console.log(nom,nombre,boton)
  })
  buttonClicked.closest('.agregado').remove();
  actualizartotal();
}

var botfinal = document.getElementById("bot_calcular")
botfinal.addEventListener("click", ()=>{
  swal("Gracias por tu compra que tengas buena tarde", "Click OK para continuar", "success");
  
})
