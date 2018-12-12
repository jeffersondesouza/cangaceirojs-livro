System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    Object.assign(this, {
                        _data: new Date(_data.getTime()),
                        _quantidade,
                        _valor
                    });

                    Object.freeze(this);
                }

                get data() {
                    return new Date(this._data.getTime());
                }
                get quantidade() {
                    return this._quantidade;
                }
                get valor() {
                    return this._valor;
                }

                get volume() {
                    return this._quantidade * this._valor;
                }
            }

            _export("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map