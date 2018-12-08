class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }


    adiciona(event) {
        // cancelando a submissão do formulário
        event.preventDefault();

        this.addNegociacao(this._inputData, this._inputQuantidade, this._inputValor);
        this.limpaFormulario(this._inputData, this._inputQuantidade, this._inputValor);
        this._mensagem = new Mensagem();
        this._mensagem.texto = 'Negociação adiconada com Sucesso!!!';

        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    esvazia(event) {
        this._negociacoes.esvazia();
    }

    addNegociacao(inputData, inputQuantidade, inputValor) {
        let negociacao = this.criarNegociacao(inputData, inputQuantidade, inputValor);
        this._negociacoes.adiciona(negociacao);

    }

    limpaFormulario(inputData, inputQuantidade, inputValor) {
        inputData.value = '';
        inputQuantidade.value = 1
        inputValor.value = 0.0;
    }


    criarNegociacao(inputData, inputQuantidade, inputValor) {
        return new Negociacao(
            new Date(DateConverter.paraData(inputData.value)),
            parseInt(inputQuantidade.value),
            parseFloat(inputValor.value)
        );

    }
}