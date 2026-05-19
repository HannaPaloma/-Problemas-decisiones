function sueldo() {
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let horas = parseFloat(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);

    // Variables
    let sueldo = 0;
    let extras = 0;

    // Condición
    if (horas <= 40) {
        sueldo = horas * pago;
    } else {
        extras = horas - 40;
        sueldo = (40 * pago) + (extras * (pago * 2));
    }

    // Mostrar resultado
    document.getElementById("result").textContent = "El sueldo semanal es: $" + sueldo;
};