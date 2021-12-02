const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri";

const pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;
    
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;
    
    const tdImc = paciente.querySelector(".info-imc");
    
    let isValid = true;
    let error = "";
    
    
    if (peso < 0 || peso > 400) {
        paciente.classList.add("pacienteInva")
        isValid = false;
        error = "peso inválido!";
    }
    if (altura < 1.00 || altura > 3.00) {
        paciente.classList.add("pacienteInva")
        isValid = false;
        error = "Altura inválida";
    }
    
    if (!isValid) {
        alert (error);
    } else {
        let resImc = calculaImc(peso,altura)
        tdImc.textContent = resImc
    }
        
}

function calculaImc (peso, altura) {

    let resImc = 0

    resImc = peso / (altura*altura);

    return resImc.toFixed(2) 
}   



