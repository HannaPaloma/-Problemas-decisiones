function beca(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);

    let resultado = "";

    if (edad > 18) {
        if (promedio >= 9) {
            resultado = "Su beca es de $2000";
        } else if (promedio >= 7.5) {
            resultado = "Su beca es de $1000";
        } else if (promedio >= 6) {
            resultado = "Su beca es de $500";
        } else {
            resultado = "Recibirá una carta de invitación para estudiar más";
        }
    } else {
        if (promedio >= 9) {
            resultado = "Su beca es de $3000";
        } else if (promedio >= 8) {
            resultado = "Su beca es de $2000";
        } else if (promedio >= 6) {
            resultado = "Su beca es de $100";
        } else {
            resultado = "Recibirá una carta de invitación para estudiar más";
        }
    }

    
    document.getElementById("result").textContent = resultado;
}
