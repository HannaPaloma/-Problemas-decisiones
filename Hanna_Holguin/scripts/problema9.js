function calcular() {

    let tipo = document.getElementById("tipo").value;
    let edad = parseInt(document.getElementById("edad").value);

    let alcohol = document.getElementById("alcohol").value;
    let lentes = document.getElementById("lentes").value;
    let enfermedad = document.getElementById("enfermedad").value;

    let base = 0;
    let cargos = 0;

    if (tipo === 'A') {
        base = 1200;
    } else if (tipo === 'B') {
        base = 950;
    } else {
        document.getElementById("result").textContent = "ERROR, tipo de poliza incorrecto";
        return;
    }

    if (alcohol === 'SI') {
        cargos += base * 0.10;
    }

    if (lentes === 'SI') {
        cargos += base * 0.05;
    }

    if (enfermedad === 'SI') {
        cargos += base * 0.05;
    }

    if (edad > 40) {
        cargos += base * 0.20;
    } else {
        cargos += base * 0.10;
    }

    const result = base + cargos;

    document.getElementById("result").textContent = "El costo total de la póliza es: $" + result;
}