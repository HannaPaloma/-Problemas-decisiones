function calcular(){
    let alumnos = parseInt(document.getElementById("alumnos").value);
    let costoAlumno = 0;
    let costoTotal = 0;

    if (alumnos > 100) {
        costoAlumno = 20;
    } 
    else if (alumnos >= 50) {
        costoAlumno = 35;
    } 
    else if (alumnos >= 20) {
        costoAlumno = 40;
    } 
    else if (alumnos > 0) {
        costoAlumno = 70;
    }

    costoTotal = alumnos * costoAlumno;

    if (alumnos > 0) {
        document.getElementById("result").textContent = "Costo por alumno: $" + costoAlumno + " total: " + costoTotal;
    } else {
        document.getElementById("result").textContent = "ERROR. Cantidad invalida de alumnos";
    }
};