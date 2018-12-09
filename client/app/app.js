(function () {

    let negociacaoController = new NegociacaoController();

    document.querySelector('.form')
        .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));

    document
        .querySelector('#botao-apaga')
        .addEventListener('click', negociacaoController.esvazia.bind(negociacaoController));
})();

