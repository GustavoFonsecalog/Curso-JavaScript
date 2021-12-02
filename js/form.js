var buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function(isy) {
    isy.preventDefault();
    let infoForm = document.querySelector("#formAdd")

    const patient = createPatient(infoForm);
    addPatTable(patient);
});

function addPatTable (patient) {
    let infoForm = document.querySelector("#formAdd")

    tabela = document.querySelector("#tabela-pacientes");
    patientTr = document.createElement("tr");
    tabela.appendChild(patientTr);

    infoForm.reset();
 
    patientTr.classList.add("paciente");

    const weiTd = document.createElement("td");
    const heiTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const fatTd = document.createElement("td");
    const imcTd = document.createElement("td");

    nameTd.textContent = patient.nome;
    nameTd.classList.add("info-nome");

    weiTd.textContent = patient.peso;
    weiTd.classList.add("info-peso");

    heiTd.textContent = patient.altura;
    heiTd.classList.add("info-altura");
    
    fatTd.textContent = patient.gordura;
    fatTd.classList.add("info-gordura");


    if (!patient.imc) {
        imcTd.textContent = calculaImc (patient.peso, patient.altura);
    } else {
        imcTd.textContent = patient.imc

    }

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weiTd);   
    patientTr.appendChild(heiTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(imcTd);
}

function createPatient(infoForm) {
    var isValid = true;
    var error = "";
    if (!infoForm.nome.value){
        isValid = false;
        error = "Nome não preenchido";
    }
    else if (!infoForm.peso.value || infoForm.peso.value < 10 || infoForm.peso.value > 150 ){
        isValid = false;
        error = "Informação sobre peso incorreta";
    }
    else if (!infoForm.altura.value || infoForm.altura.value < 1.00 || infoForm.altura.value > 3.00){
        isValid = false;
        error = "Informação sobre altura incorreta";
    }

    if (!isValid) {
        alert (error);
        return false;
    } else {
        return patient = {
            nome : infoForm.nome.value,
            peso : infoForm.peso.value,
            altura : infoForm.altura.value,
            gordura : infoForm.gordura.value
        } 
    }
}   

let filterCamp = document.querySelector("#filterTab");
 
filterCamp.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

        if (this.value.length > 0){
            for ( var i = 0; i < pacientes.length; i++){
                var paciente = pacientes[i];
                var tdNome = paciente.querySelector(".info-nome");
                var nomePatient = tdNome.textContent 
                var expression = new RegExp(this.value,"i");

                if ( expression.test(nomePatient)) {
                    paciente.classList.remove("selectPatient")
                }else{
                    paciente.classList.add("selectPatient")

                }
        }
            
        } else  {
            for ( var i = 0; i < pacientes.length; i++){
                var paciente = pacientes[i];
                paciente.classList.remove("selectPatient")
        }
    }
});
