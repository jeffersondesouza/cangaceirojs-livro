/* const Negociacao = (function () {

    const Negociacao = function () {
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;
    }

    return Negociacao;
})() */

class Negociacao {
    constructor(_data = new Date(), _quantidade = 1, _valor = 0.0) {
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