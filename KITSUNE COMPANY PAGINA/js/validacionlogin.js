import { tenerlista } from "./validacionsign";

class login extends validacionsign{
    
}

function validacion_sesion() {
    const email=document.getElementById("correo");
    const password1=document.getElementById("pass");
    const registro=document.getElementById("boton");
    //seccion de asignacion de valores input a var
    const emailval=email.value.trim();
    const password1val= password1.value.trim();
// variable errorf para validar errores de ingreso
    var errorf=0;
    var lista=tenerlista(lista);
    lista.forEach(element => {
        console.log(lista)
    });
}