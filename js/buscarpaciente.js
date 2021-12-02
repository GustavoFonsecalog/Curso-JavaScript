var btnAdd = document.querySelector("#srcPatient")

btnAdd.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pac1ientes");

    xhr.addEventListener("load", function(){

        if( xhr.status == 200){
        let res = xhr.responseText;
        var patientXhr = JSON.parse(res);
        patientXhr.forEach(function (paciente) {
            addPatTable(paciente);
        
            });
        }else {
            window.open("error.html")
        }
    });

    xhr.send();

 
});     