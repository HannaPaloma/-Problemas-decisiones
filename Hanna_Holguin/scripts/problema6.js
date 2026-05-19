function descuento() {
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let precio = parseFloat(document.getElementById("precio").value);

    let descuento = 0;
    let total = 0;

    if (precio >= 200) {
        descuento = precio * 0.15;
    } else if (precio > 100 && precio < 200) {
        descuento = precio * 0.12;
    } else {
        descuento = precio * 0.10;
    }

    const result = precio - descuento;

    document.getElementById("result").textContent = "El descuento es: $" + descuento + " y el total a pagar es: $" + result;
}