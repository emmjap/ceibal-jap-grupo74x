let baseDeDatos = [
    {
        id: 0,
        nombre: 'Dark Souls 3',
        precio: 200
    },
    {
        id: 1,
        nombre: 'Dishonored 2',
        precio: 20
    },
    {
        id: 2,
        nombre: 'Rocket League',
        precio: 2
    },
    {
        id: 3,
        nombre: 'Call of Duty: Black Ops 3',
        precio: 10
    },
  {
    id: 4,
  nombre: 'Fallout 4',
  precio: 32222222
  }
  ]

var units = document.querySelector('#absoluteUnits');
var donSelect = document.querySelector('#seleccionJuego');
var texTotal = document.querySelector('#pTotal');
var texUnidad = document.querySelector('#pUnidad');
var texEnvio = document.querySelector('#pEnvio');
var texIVA = document.querySelector('#pIVA');
var tipoEntrega = document.querySelector('#entrega');
var tipoJuego = document.querySelector('#formatoJuego')
var dir1 = document.querySelector('#envioFisicoDir')
var dir2 = document.querySelector('#envioFisicoPost')
var dir3 = document.querySelector('#envioFisicoNom')
var dir4 = document.querySelector('#envioFisicoApe')
var btnCard =
var btnPagos =
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
    dir1.disabled = false;
    dir2.disabled = false;
    dir3.disabled = false;
    dir4.disabled = false;
    precioEnvio();

  }
  else {
    tipoEntrega.disabled = true;
    texEnvio.disabled = true;
    dir1.disabled = true;
    dir2.disabled = true;
    dir3.disabled = true;
    dir4.disabled = true;
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
window.onload = enableEnvio();
window.onload = displayPrecio();
window.onload = calculoUnidades();
window.onload = calcIVA();
