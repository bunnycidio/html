let lista=[];

function validainputs(){
    var nombre=document.getElementById("regnom");
    var apellido=document.getElementById("regap");
    var telefono=document.getElementById("regnum");
    var email=document.getElementById("regcorr");
    var password1=document.getElementById("pass");
    var password2=document.getElementById("conpass");
    var registro=document.getElementById("registro");
    //seccion de asignacion de valores input a var
    var nombreval= nombre.value.trim();
    var documentoval= apellido.value.trim();
    var telefonoval= telefono.value.trim();
    var emailval=email.value.trim();
    var password1val= password1.value.trim();
    var password2val= password2.value.trim();
// variable errorf para validar errores de ingreso
    var errorf=0;
// Seccion de validacion de nombre
    if (nombreval ==="") {
        ocErrorform(nombre, "Por favor ingrese su nombre");
        errorf=1;
    }
    else{
        exitosform(nombre);
    }
    // Seccion de validacion de doc  identidad
    if (documentoval ==="") {
        ocErrorform(apellido, "Por favor ingrese su Apellido");
        errorf=1;
    }
    else{
        exitosform(apellido);
    }
// Seccion de validacion de telefono
    if (telefonoval ==="") {
        ocErrorform(telefono, "Por favor ingrese su número de teléfono");
        errorf=1;
    }
    else if (!valnumero(telefonoval)){
        ocErrorform(telefono,"Numero celular no valido");
        errorf=1;
    }
    else{
        exitosform(telefono);
    }
// Seccion de validacion de Email
    if (emailval ===""){
        ocErrorform(email,"Por favor ingrese su email");
        errorf=1;
    }
    else if (!valEmail(emailval)){
        ocErrorform(email,"Email no valido");
        errorf=1;
    }
    else{
        exitosform(email);
    }
// Seccion de validación de password
    if (password1val ===""){
        ocErrorform(password1,"no se puede dejar password en blanco");
        errorf=1;
    }
    else if (!valPassword(password1val)){
        ocErrorform(password1,"no ingreso, password no valido");
        errorf=1;
    }
    else{
        exitosform(password1);
    }
    // Seccion de revalidación de password 2da vez.
    if (password2val ===""){
        ocErrorform(password2,"no se puede dejar password en blanco");
        errorf=1;
    }
    else if ( password1val!==password2val){
        ocErrorform(password2,"error contraseñas no coinciden");
        errorf=1;
    }
    else{
        exitosform(password2);
    }
// Seccion de validación de ingreso exitoso sin errores
    if (errorf==0){
        registro.addEventListener('click',function(){
            
            swal("REGISTRO USUARIO EXITOSO !!", "Click OK para continuar", "success");
            let element={
                nombreval,
                documentoval,
                telefonoval,
                emailval,
                password1val
            }
            lista.push(element)
            console.log(lista)
            lista.forEach((ele)=>
                console.log(ele.nombreval))
        })
    }
    return false;
    function ocErrorform (input, message){
       var formControl=input.parentElement;
       var small=formControl.querySelector("small");
       formControl.className="form-control error";
       small.innerText =message; 
    }
    function exitosform (input){
        var formControl=input.parentElement;
            formControl.className="form-control success";
        }
    function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
    function valPassword(password1){
        return /^[a-z0-9_-]{6,10}$/.test(password1);
    }
    function valnumero (telefono){
        return  /^[0-9]+$/.test(telefono);
    }
    function valdocumento (apellido){
        return  /^[0-9]+$/.test(apellido);
    }
}
function validasesion(){
    var emaillogin=document.getElementById("correo");
    var passwordlogin=document.getElementById("contra");
    var botonlogin=document.getElementById("boton");
    var valcorrlogin=email.value.trim();
    var valpasslogin= password1.value.trim();
    lista.forEach((elemento)=>{
        correo= elemento.emailval;
        contraseña= elemento.password1val;
        if (emaillogin==correo & passwordlogin==contraseña) {
            swal("INICIO DE SESION EXITOSO !!", "Click OK para continuar", "success");
        }
        else if(emaillogin==correo & passwordlogin!=contraseña){
            swal("Contraseña incorrecta", "Click OK para continuar", "success");
        }
        else if(emaillogin!=correo & passwordlogin==contraseña){
            swal("Correo incorrecto", "Click OK para continuar", "success");
        }
        console.log(lista)
    })
}