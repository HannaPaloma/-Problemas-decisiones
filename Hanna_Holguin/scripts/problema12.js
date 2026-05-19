function calcular(){
    let horas = parseInt(document.getElementById("horas").value);
    let pago = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;

    if (horas > 50) {
        document.getElementById("result").textContent = "ERROR. No esta permitido trabajar mas de 50 horas";
        return;
    }

    if (horas <= 40) {
        sueldo = horas * pago;
    } 
    else if (horas <= 45) {
        let normales = 40 * pago;
        let dobles = (horas - 40) * (pago * 2);
        sueldo = normales + dobles;
    } 
    else if (horas <= 50) {

        let normales = 40 * pago;
        let dobles = 5 * (pago * 2);
        let triples = (horas - 45) * (pago * 3);
        sueldo = normales + dobles + triples;
    }


    document.getElementById("result").textContent = "El sueldo semanal es: " + sueldo;
};