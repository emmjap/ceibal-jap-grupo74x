             var modal = document.getElementById('idVentana_De_Compra01');

              //Cuando el usuario haga click en la ventana de compra se cierra
              window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
              }