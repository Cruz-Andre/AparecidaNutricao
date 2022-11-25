var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function() {
        paiDoAlvo.remove();
    }, 600);

    /**
     * ou tudo em uma linha
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
    */

});
