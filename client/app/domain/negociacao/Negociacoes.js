System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }

                get volumeTotal() {
                    return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
                }

                adiciona(negociacao) {
                    this._negociacoes = [...this._negociacoes, negociacao];
                }

                esvazia() {
                    this._negociacoes.length = 0;
                }

                paraArray() {
                    return this._negociacoes.map(v => v);
                }
            }

            _export("Negociacoes", Negociacoes);
        }
    };
});
//# sourceMappingURL=Negociacoes.js.map