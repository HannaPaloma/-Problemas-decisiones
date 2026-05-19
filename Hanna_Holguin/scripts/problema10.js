function vacaciones(){
/* vinculador variable convertir a numero leemos el input con id num1 su valor */
    let dinero=parseFloat(document.getElementById("dinero").value);
    let costo= 2;

    let mexico = 750 * costo * 2;
    let pv = 800 * costo * 2;
    let acapulco = 1200 * costo * 2;
    let cancun = 1800 * costo * 2;

    if (dinero >= cancun) {
        result= "Puede ir a Cancún";
    } else if (dinero >= acapulco) {
        result= "Puede ir a Acapulco";
    } else if (dinero >= pv) {
        result= "Puede ir a Puerto Vallarta";
    } else if (dinero >= mexico) {
        result= "Puede ir a México";
    } else {
        result= "Debe quedarse en casa";
    }

    document.getElementById("result").textContent = result;
};
