class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }

    get volumeTotal() {
        return this._negociacoes
            .reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    adiciona(negociacao) {
        this._negociacoes = [...this._negociacoes, negociacao];
    }

    paraArray() {
        return this._negociacoes.map(v => v);
    }
}