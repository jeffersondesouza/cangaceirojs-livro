(function () {

    let negociacaoController = new NegociacaoController();

    document.querySelector('.form')
        .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));

    document
        .querySelector('#botao-apaga')
        .addEventListener('click', negociacaoController.esvazia.bind(negociacaoController));
})();


const negociacao = new Proxy(new Negociacao(new Date(), 2, 100
), {
        get: function (target, prop, receiver) {
            return target[prop];
        },
        set(target, prop, value, receiver) {
            return Reflect.set(target, prop, value);
        }
    });
console.log(negociacao.quantidade);
console.log(negociacao.volume);