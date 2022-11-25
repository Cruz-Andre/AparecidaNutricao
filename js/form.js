/**
 * Botão adicionar clientes
 */
 var botaoAdicionar = document.querySelector("#adicionar-paciente");
 
 botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Oi eu sou o botão e fui clicado!");

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form); // Extraindo infromações do paciente do form
    console.log(paciente);
    
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0) {
      exibeMensagensDeErro(erros);
      
      return;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset(); //Limpa o formulário de preenchimento
    
    //limpa as mensagens de erro
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

 });

 
 function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);

  // adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);


 }


 function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
 }


 function obtemPacienteDoFormulario(form) {
   var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
   }
   return paciente;
 }


 // Cria a TR e a TD do paciente
 function montaTr(paciente) {
   var pacienteTr = document.createElement("tr");
   pacienteTr.classList.add("paciente");

   /**
    * coloca as td dentro da tr. 
    */
   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

   return pacienteTr;
 }


 function montaTd(dado, classe) {
   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);

   return td;
 }

 function validaPaciente(paciente) {

   var erros = [];

   if(paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco")
   }

   if(!validaPeso(paciente.peso)) {
      erros.push("Peso é inválido");
   }

   if(!validaAltura(paciente.altura)) {
      erros.push("Altura é inválida");
   }

   if(paciente.gordura.length == 0){
    erros.push("A gordura não pode ser em branco")
   }

   return erros;

 }