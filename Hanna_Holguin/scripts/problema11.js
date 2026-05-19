function bono() {
    let años = parseInt(document.getElementById("antiguedad").value);
    let bono = 0;

    if (años > 0 && años <= 5) {
        bono = años * 100;
    } else if (años > 5) {
        bono = 1000;
    } else {
        bono = 0;
    }

    document.getElementById("result").textContent = "El bono el bono es de $" + bono;
}