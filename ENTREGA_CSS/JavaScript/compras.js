let baseDeDatos = [
    {
        id: 0,
        nombre: 'Morrón (Unidad)',
        precio: 200
    },
    {
        id: 1,
        nombre: 'Cebolla',
        precio: 20
    },
    {
        id: 2,
        nombre: 'Calabacin',
        precio: 2
    },
    {
        id: 3,
        nombre: 'Fresas',
        precio: 10
    },
  {
    id: 4,
  nombre: 'Arca de la Alianza',
  precio: 32222222
  }
  ]

var units = document.getElementById('absoluteUnits');
var donSelect = document.getElementById('seleccionJuego');
var texTotal = document.querySelector('#pTotal');
var texUnidad = document.querySelector('#pUnidad');
var texEnvio = document.querySelector('#pEnvio');
var texIVA = document.querySelector('#pIVA');
var tipoEntrega = document.querySelector('#entrega');
var tipoJuego = document.querySelector('#formatoJuego')
var precioUnidades;

for (let info of baseDeDatos) {
  var opt = document.createElement("option");
  opt.value = info.id;
  opt.innerText = info.nombre;
  donSelect.appendChild(opt);
}

//Si el juego es fisico habilita la seleccion de envio.
function enableEnvio(){
  if (tipoJuego.value == 'phys'){
    tipoEntrega.disabled = false;
    texEnvio.hidden = false;
    precioEnvio();
  }
  else {
    tipoEntrega.disabled = true;
    texEnvio.hidden = true;
  }
}


function displayPrecio(){
  for (i=0; i < baseDeDatos.length; i++)
    if (donSelect.value == baseDeDatos[i].id){
    texUnidad.textContent = 'Precio de la Unidad = ' + baseDeDatos[donSelect.value].precio;
    }
}


 function calculoUnidades(){
  texTotal.textContent = '';
  precioUnidades = baseDeDatos[donSelect.value].precio * units.value;
  texTotal.textContent += 'Total de las Unidades = ' + precioUnidades;
 }

//Dependiendo del envio se calcula un costo diferente.
function precioEnvio(){
  var costoEnvio;
  texEnvio.textContent = 'Costo del Envio: ';
  switch (tipoEntrega.value){
    case 'comun':
      costoEnvio = precioUnidades*0.005;
      texEnvio.textContent += reducirDecs (costoEnvio);
      break;
    case 'especial':
      costoEnvio = precioUnidades*0.02;
      texEnvio.textContent += reducirDecs (costoEnvio);
      break;
    case 'premium':
      costoEnvio = precioUnidades*0.05;
      texEnvio.textContent += reducirDecs(costoEnvio);
      break;
  }
}

//Impuesto sobre valor agregado. Que asco.
function calcIVA(){
  var costoIVA = precioUnidades*0.22;
  texIVA.textContent = 'IVA: ' + reducirDecs(costoIVA);
}

//Esta funcion reduce los decimales de un numero.
function reducirDecs(numero){
  numero = numero*100;
  numero = Math.floor(numero);
  numero = numero/100;
  return numero;
}

//para que la pagina parezca menos rota, ejecuta las funciones cuando carga.
window.onload = displayPrecio();
window.onload = calculoUnidades();
window.onload = calcIVA();
