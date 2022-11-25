var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    //console.log(campoFiltro.value);
    //console.log(this.value); this é o campoFiltro, veja o video
    
    var pacientes = document.querySelectorAll(".paciente");

    if(campoFiltro.value.length > 0) {
        for(var index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(campoFiltro.value, "i");

            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }
            else {
                paciente.classList.remove("invisivel");
    
            }
        }
    }
    else {
        for(var index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            paciente.classList.remove("invisivel")
        }
    }
})