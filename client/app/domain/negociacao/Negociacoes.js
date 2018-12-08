class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes = [...this._negociacoes, negociacao];
        // this._negociacoes.push(negociacao);
    }

    paraArray() {
        return this._negociacoes.map(v => v);
    }
}