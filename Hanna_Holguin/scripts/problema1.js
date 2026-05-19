function votar() {
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let edad = parseInt(document.getElementById("edad").value);
    let resultado = "";

    // Condición
    if (edad >= 18) {
        resultado = "Puede votar";
    } else {
        resultado = "No puede votar";
    }

    // Mostrar resultado
    document.getElementById("result").textContent = resultado;
};