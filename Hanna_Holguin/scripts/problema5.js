function menorEdad() {
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let nombre1 = document.getElementById("nombre1").value;
    let nombre2 = document.getElementById("nombre2").value;
    let nombre3 = document.getElementById("nombre3").value;
    let edad1 = parseInt(document.getElementById("edad1").value);
    let edad2 = parseInt(document.getElementById("edad2").value);
    let edad3 = parseInt(document.getElementById("edad3").value);

    let menorNombre = "";
    let menorEdad = 0;

    if (edad1 <= edad2 && edad1 <= edad3) {
        menorNombre = nombre1;
        menorEdad = edad1;
    } else if (edad2 <= edad1 && edad2 <= edad3) {
        menorNombre = nombre2;
        menorEdad = edad2;
    } else {
        menorNombre = nombre3;
        menorEdad = edad3;
    }

    document.getElementById("result").textContent = "La persona menor es " + menorNombre + " con " + menorEdad + " años.";
};