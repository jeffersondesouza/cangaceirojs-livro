(function () {

    const $ = document.querySelector.bind(document);

    let negociacaoController = new NegociacaoController();

    $('.form')
        .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));

    $('#botao-apaga')
        .addEventListener('click', negociacaoController.esvazia.bind(negociacaoController));

    $('#botao-importa')
        .addEventListener('click', negociacaoController.importaNegociacoes.bind(negociacaoController));

    
})();

