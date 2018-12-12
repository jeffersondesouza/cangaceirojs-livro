System.register(['./controllers/NegociacaoController.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
        }],
        execute: function () {

            const $ = document.querySelector.bind(document);

            let negociacaoController = new NegociacaoController();

            $('.form').addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));

            $('#botao-apaga').addEventListener('click', negociacaoController.apaga.bind(negociacaoController));

            $('#botao-importa').addEventListener('click', negociacaoController.importaNegociacoes.bind(negociacaoController));
        }
    };
});
//# sourceMappingURL=app.js.map