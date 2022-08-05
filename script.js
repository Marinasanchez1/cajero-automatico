
let cuentas = [
    { nombre: "Hiromi", saldo: 200, password: '123' },
    { nombre: "Luis", saldo: 300, password: '123' },
    { nombre: "Carlos", saldo: 100, password: '123' }
    ];


    function ingresar() {
      // Tomar datos de los inputs
        let usuario = document.getElementById("usuario").value;
        let contrasenia = document.getElementById('contrasenia').value;
      // alert('El usuario del input es: ' + usuario + ' y la contraseña es: ' + contrasenia);
      // Validar los datos de los inputs
        validarUsuarioLogin(usuario, contrasenia);
    }

    function validarUsuarioLogin (usuario, contra) {
    let usuarioValido = false;
        for(let i = 0; i < cuentas.length; i++) {
            if(usuario === cuentas[i].nombre && contra === cuentas[i].password) {
              // Definir qué pasará si son correctos
                alert('DATOS CORRECTOS');
                usuarioValido = true;
                mostrarMenuHTML(i)
                return
        }
    }
      // Definir qué pasará si son incorrectos
        if(!usuarioValido) {
            alert('Datos incorrectos');
        }
    }

    function mostrarMenuHTML(posicionUsuario){
      // Ocultar Login
        document.getElementById("inicio").style.display = "none";
      // Mostrar menú opciones
        document.getElementById("acciones").style.display = "block";
      // Mostrar nombre en el saludo
      // 1. obtener elemento a modificar a través de su id e insertar el nombre del usuario actual
        document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre
      // Añadir funciones a los botenes desde Js, con ayuda de addEventListener
      // Consultar saldo
        document.getElementById("consultar").addEventListener('click', function () {
          // alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
          // No usar un alert poner el saldo a consultar en un elemento HTML
          // Opc1. Crear un elemento HTML
          // Opc2. El elemento ya está creado en el HTML y sólo lo rellenamos
        document.getElementById("acciones").style.display="none";
        document.getElementById("saldo").style.display="block";
        document.getElementById("info").style.display="block";
        document.getElementById("info").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
        
        } );

        document.getElementById("menu").addEventListener('click', function(){
            document.getElementById("saldo").style.display="none";
            document.getElementById("acciones").style.display = "block";
        });

        document.getElementById("retira").addEventListener('click', function(){
            var sa=cuentas[posicionUsuario].saldo;
            if(sa<=10){
                document.getElementById('retirada').style.display="none";
                document.getElementById('cantidad').style.display="none";
                document.getElementById("infor").innerText = 'No puedes retirar saldo';
            }else{
                document.getElementById('retirada').style.display="block";
            }
            document.getElementById("acciones").style.display="none";
            document.getElementById("retiro").style.display = "block";

        });


        document.getElementById("deposita").addEventListener('click', function(){
            var sal=cuentas[posicionUsuario].saldo;
            if(sal>=990){
                document.getElementById("depositada").style.display="none";
                document.getElementById("cantidadD").style.display="none";
                document.getElementById("informac").innerText = 'No puedes depositar saldo';
            }else{
                document.getElementById("depositada").style.display="block";
                document.getElementById("cantidadD").style.display="block";
            }
            document.getElementById("acciones").style.display="none";
            document.getElementById("deposito").style.display = "block";
        });



        document.getElementById("menu2").addEventListener('click', function(){
            document.getElementById("informa").innerText = '';
            document.getElementById("infor").innerText = '';
            document.getElementById("cantidad").style.display="block";
            document.getElementById("retirada").style.display="block";
            document.getElementById("retiro").style.display="none";
            document.getElementById("acciones").style.display = "block";
        });

        document.getElementById("menu3").addEventListener('click', function(){
            document.getElementById("informaci").innerText = '';
            document.getElementById("informac").innerText = '';
            document.getElementById("cantidadD").style.display="block";
            document.getElementById("depositada").style.display="block";
            document.getElementById("deposito").style.display="none";
            document.getElementById("acciones").style.display = "block";
        });

        document.getElementById("menu4").addEventListener('click', function(){
            document.getElementById("servicios").style.display="none";
            document.getElementById("acciones").style.display = "block";
        });


        document.getElementById("retirada").addEventListener('click',function(){
        var retiro = parseInt(document.f1.cantidad.value);
        var checad=  cuentas[posicionUsuario].saldo;
        console.log(typeof retiro,typeof checad);
        if(retiro>=checad){
            document.getElementById("infor").style.display="block";
            document.getElementById("infor").innerText = 'No puedes retirar mas del saldo';
        }if(checad<=10){
            document.getElementById('retirada').style.display="none";
                document.getElementById('cantidad').style.display="none";
                document.getElementById("infor").innerText = 'No puedes retirar saldo';
        } else if(checad==990 && retiro>checad){
            document.getElementById("informa").style.display="none";
            document.getElementById("infor").style.display="block";
            document.getElementById("infor").innerText = 'No puedes retirar';
        }else if(retiro<checad && checad>=9){
        cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
            document.getElementById("cantidad").style.display="none";
            document.getElementById("retirada").style.display="none";
            document.getElementById("informa").style.display="block";
            document.getElementById("infor").style.display="block";
            document.getElementById("infor").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
        }
        document.getElementById("cantidad").value = "";
        });





        document.getElementById("depositada").addEventListener('click',function(){
            var depositar = parseInt(document.f2.cantidadD.value);
            var checa= cuentas[posicionUsuario].saldo;
            console.log(typeof depositar,typeof checa);
            console.log(depositar,checa);
            if((checa+depositar)>=990){
                document.getElementById("informac").style.display="block";
                document.getElementById("informac").innerText = 'Saldo Excedente';
            }else if(checa>=990){
                document.getElementById("informac").style.display="block";
                document.getElementById("informac").innerText = 'No se permiten mas depositos';
            }else if(checa>=0 && checa<990 && depositar>=0 && depositar<990){
                cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + depositar;
                document.getElementById("cantidadD").style.display="none";
                document.getElementById("depositada").style.display="none";
                document.getElementById("informaci").style.display="block";
                document.getElementById("informac").style.display="block";
                document.getElementById("informac").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
            }else if(depositar>=990){
            document.getElementById("informac").style.display="block";
            document.getElementById("informac").innerText = 'No puedes depositar mas de $990 en tu cuenta';
            }
               // cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo + depositar;
                //document.getElementById("cantidadD").style.display="none";
               // document.getElementById("depositada").style.display="none";
               // document.getElementById("informaci").style.display="block";
               // document.getElementById("informac").style.display="block";
                //document.getElementById("informac").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
            
               // document.getElementById("informac").innerText = 'No puedes tener mas de $990 en tu cuenta';
            
                
                document.getElementById("cantidadD").value = "";
            });



        document.getElementById("PagarServicio").addEventListener('click', function(){
            document.getElementById("acciones").style.display="none";
            document.getElementById("servicios").style.display="block";
            document.getElementById("aparece").style.display="none";
            document.getElementById("ultimo").style.display="none";
        });
        
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.

        document.getElementById("ultimo").addEventListener('click',function(){
            var pag = parseInt(document.pagar.dinero.value);
        cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - pag;
        document.getElementById("infopago").style.display="block";
        document.getElementById("infopago").innerText = 'El saldo actual es de: $' + cuentas[posicionUsuario].saldo;
        document.getElementById("ultimo").style.display="none";
        document.getElementById("aparece").style.display="none";
        document.getElementById("servicios").style.display="block";
        document.getElementById("dinero").value = "";
    
    });





        document.getElementById("luz").addEventListener('click' , function(){
            document.getElementById("aparece").style.display="block";
            document.getElementById("ultimo").style.display="block";
        
        });
        document.getElementById("agua").addEventListener('click' , function(){
            document.getElementById("aparece").style.display="block";
            document.getElementById("ultimo").style.display="block";
        
        });
        document.getElementById("internet").addEventListener('click' , function(){
            document.getElementById("aparece").style.display="block";
            document.getElementById("ultimo").style.display="block";
        
        });
    }



  function retirarSaldoHTML() {
    //Limpiar el texto info
   // document.getElementById("infor").innerText = '';
   //document.getElementById("cantidad").style.display="none";
  // document.getElementById("sacar").style.display="none";
  //var suma=0;
  //var retiro=0;
  //var retiro2=0;
     // retiro = Number(retiro);
      //cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
     // document.getElementById("infor").style.display="block"; 
     // document.getElementById("menu2").addEventListener('click', function(){
          //document.getElementById("retiro").style.display="none";
         // document.getElementById("acciones").style.display = "block";
     
}
//function suma(){
   // var retiro = parseInt(document.f1.cantidad.value);
    //  var retiro2 =parseInt(document.f1.cantidad2.value);
   //   var suma= retiro+retiro2;
   //   alert("se realizo con exito"+suma);
   // }
  //  function retirarSaldo(posicionUsuario){
  //      var retiro = parseInt(document.f1.cantidad.value);
   //     cuentas[posicionUsuario].saldo = cuentas[posicionUsuario].saldo - retiro;
   //       alert("se realizo con exito"+retiro);
   //     }

  // En lugar de usar esta función se construyó con un addEventListener 
  // function consultarSaldoHTML(posicionUsuario) {
  //     alert('El saldo actual es de: $' + cuentas[posicionUsuario].saldo);
  // }
 
