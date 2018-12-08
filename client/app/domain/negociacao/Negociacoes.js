class Negociacoes {
    constructor() {
        this._negociacoes = [];
        Object.freeze(this);
    }

    get volumeTotal() {
        return this._negociacoes
            .reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    adiciona(negociacao) {
        this._negociacoes = [...this._negociacoes, negociacao];
        this._armadilha(this);
    }

    esvazia() {
        this._negociacoes.length = 0;
        this._armadilha(this);
    }

    paraArray() {
        return this._negociacoes.map(v => v);
    }
}