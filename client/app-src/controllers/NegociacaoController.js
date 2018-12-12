
import { Negociacoes, NegociacaoService, Negociacao } from '../domain/index.js';

import { NegociacoesView, Mensagem, MensagemView, DateConverter } from '../ui/index.js';

import { Bind, getNegociacaoDao, debounce, controller } from '../util/index.js';

@controller('#data', '#quantidade', '#valor')
export class NegociacaoController {

    constructor(inputData, inputQuantidade, inputValor) {
        let $ = document.querySelector.bind(document);

        this._inputData = inputData;
        this._inputQuantidade = inputQuantidade;
        this._inputValor = inputValor;

        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'adiciona', 'esvazia'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView('#mensagemView'),
            'texto'
        );

        this._service = new NegociacaoService();


        this._init();

    }

    async _init() {
        try {

            const dao = await getNegociacaoDao();
            const negociacoes = await dao.listaTodos()

            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));


        } catch (err) {
            this._mensagem.texto = err
        }


    }


    @debounce()
    async adiciona(event) {
        // cancelando a submissão do formulário

        try {
            event.preventDefault();
            const negociacao = this.criarNegociacao(this._inputData, this._inputQuantidade, this._inputValor);

            const dao = await getNegociacaoDao();
            await dao.adiciona(negociacao);

            this._negociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negociação adiconada com Sucesso!!!';
            this.limpaFormulario();

        } catch (err) {
            console.log('err', err);
            this._mensagem.texto = err

        }
    }

    esvazia() {
        this._negociacoes.esvazia();
    }





    criarNegociacao(inputData, inputQuantidade, inputValor) {
        return new Negociacao(
            new Date(DateConverter.paraData(inputData.value)),
            parseInt(inputQuantidade.value),
            parseFloat(inputValor.value)
        );

    }

    @debounce(1500)
    async importaNegociacoes() {
        // obterNegociacoesDaSemanaAnterior
        try {

            const negociacoes = await this._service.obterNegociacoesDoPerildo();

            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));

            this._mensagem.texto = 'Negociações importadas com sucesso';

        } catch (err) {
            this._mensagem.texto = err;
        }

    }


    async apaga() {
        try {
            const dao = await getNegociacaoDao()
            await dao.apagaTodos();
            this._negociacoes.esvazia();
            this._mensagem.texto = 'Negociações apagadas com sucesso';

        } catch (err) {
            this._mensagem.texto = err
        }

    }

    /*  */

    limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0;
    }
}