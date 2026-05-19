function bono(){
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    let bonoAntiguedad = 0;
    let bonoSueldo = 0;
    let bonoMayor = 0;

    if (antiguedad > 2 && antiguedad < 5) {
        bonoAntiguedad = sueldo * 0.20;
    } else if (antiguedad >= 5) {
        bonoAntiguedad = sueldo * 0.30;
    }

    if (sueldo < 1000) {
        bonoSueldo = sueldo * 0.25;
    } else if (sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
    } else {
        bonoSueldo = sueldo * 0.10;
    }

    if (bonoAntiguedad > bonoSueldo) {
        bonoMayor = bonoAntiguedad;
    } else {
        bonoMayor = bonoSueldo;
    }


    document.getElementById("result").textContent = "El bono asignado es: $" + bonoMayor;
}