
let capacidad_maxima_habitaciones = [6, 4, 2];
let intervalo_precios = [ [500, 2500], [100, 400], [40, 100] ];

function validarFormulario() {

    // Datos de la reserva
    let ciudad          = document.getElementById("ciudad");
    let tipoHabitacion  = document.getElementById("tipo_habitacion");
    let servicio        = document.getElementById("tipo_servicio");
    let fechaIN         = document.getElementById("fechaIN");
    let horaIN          = document.getElementById("horaIN");
    let fechaOUT        = document.getElementById("fechaOUT");
    let horaOUT         = document.getElementById("horaOUT");
    let nAdultos        = document.getElementById("numAdultos");
    let nNinos          = document.getElementById("numNinos");

    // Datos personales
    let nombre          = document.getElementById("nombre");
    let apellidos       = document.getElementById("apellidos");
    let docIdn          = document.getElementById("docIdn");
    let email           = document.getElementById("correoE");
    let tel             = document.getElementById("telef");

    /* ** Chequeo de datos ** */
    let fechaEntrada = null;
    let fechaSalida = null;
    let numAdultos = 0;
    let numNinos = 0;
    
    // FECHAS
    if(fechaIN.value &&  fechaOUT.value){
        fechaEntrada = new Date(fechaIN.value);
        fechaSalida = new Date(fechaOUT.value);
        let hoy = new Date();

        if (!(fechaEntrada > hoy && fechaSalida > hoy && fechaSalida > fechaEntrada)){
            alert("Las fechas no son válidas");
            return false;
        }
    }
    else {
        if (!fechaIN.value) { 
            alert("No se ha indicado la fecha de entrada");
            return false;
        }
        if (!fechaOUT.value) {
            alert("No se ha indicado la fecha de salida");
            return false;
        }
    }

    // HORAS
    if (!horaIN.value) { 
        alert("No se ha indicado la hora de entrada");
        return false;
    }
    if (!horaOUT.value) { 
        alert("No se ha indicado la hora de salida");
        return false;
    }

    // CAPACIDAD
    if (nAdultos.value && nNinos.value) {
        let ind = 0;
        if (tipoHabitacion.value === 'suite')           ind = 0;
        else if (tipoHabitacion.value === 'habitacion') ind = 1;
        else if (tipoHabitacion.value === 'check')      ind = 2;

        numAdultos = parseInt(nAdultos.value);
        numNinos = parseInt(nNinos.value);

        if ((numAdultos + numNinos) > capacidad_maxima_habitaciones[ind]){
            alert("El número de personas supera la capacidad de la habitación");
            return false;
        }
    }
    else {
        if (!nAdultos.value) {
            alert("No se ha indicado la cantidad de adultos");
            return false;
        }
        if (!nNinos.value) {
            alert("No se ha indicado la cantidad de niños");
            return false;
        }
    }
   
    // DATOS PERSONALES
    if (nombre.value) {
        let aux = nombre.value.toLowerCase();
        let expresion = /[a-z\s]+$/;

        if (!aux.match(expresion)) {
            alert("El nombre no es válido");
            return false;
        }
    }
    else {
        alert("No hay ningún nombre introducido");
        return false;
    }

    if (apellidos.value) {
        let aux = apellidos.value.toLowerCase();
        let expresion = /[a-z\s]+$/;

        if (!aux.match(expresion)) {
            alert("Los apellidos no son válidos");
            return false;
        }
    }
    else {
        alert("No hay apellidos introducidos");
        return false;
    }
    
    if (docIdn.value) {
        let aux = docIdn.value.toLowerCase();
        let expresion = /\d{8}[a-z]$/;

        if (!aux.match(expresion)) {
            alert("El DNI no es correcto");
            return false;
        }
    }
    else {
        alert("No hay ningún documento de identidad introducido");
        return false;
    }

    if (!email.value){
        alert("No hay ningún email introducido");
        return false;
    }

    if (tel.value) {
        let aux = tel.value;
        let expresion = /\d{9}$/;

        if (!aux.match(expresion)) {
            alert("El número de teléfono no es correcto");
            return false;
        }
    }
    else {
        alert("No hay ningún teléfono introducido");
        return false;
    }

    alert("Datos correctamente introducidos");
    
    return false;
}