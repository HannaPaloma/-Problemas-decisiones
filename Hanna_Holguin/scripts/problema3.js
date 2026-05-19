function regalo() {
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let dinero = parseFloat(document.getElementById("dinero").value);
    let resultado = "";

    if (dinero <= 10) {
        resultado = "Puede comprar una Tarjeta";
    } else if (dinero <= 100) {
        resultado = "Puede comprar Chocolates";
    } else if (dinero <= 250) {
        resultado = "Puede comprar Flores";
    } else {
        resultado = "Puede comprar un Anillo";
    }

    //El texto que tiene
    document.getElementById("result").textContent = resultado;
};