System.register(['../util/Bind.js', '../domain/negociacao/Negociacoes.js', '../ui/view/NegociacoesView.js', '../ui/models/Mensagem.js', '../ui/view/MensagemView.js', '../domain/negociacao/NegociacaoService.js', '../util/DaoFactory.js', '../domain/negociacao/Negociacao.js', '../ui/converters/DateConverter.js'], function (_export, _context) {
    "use strict";

    var Bind, Negociacoes, NegociacoesView, Mensagem, MensagemView, NegociacaoService, getNegociacaoDao, Negociacao, DateConverter;
    return {
        setters: [function (_utilBindJs) {
            Bind = _utilBindJs.Bind;
        }, function (_domainNegociacaoNegociacoesJs) {
            Negociacoes = _domainNegociacaoNegociacoesJs.Negociacoes;
        }, function (_uiViewNegociacoesViewJs) {
            NegociacoesView = _uiViewNegociacoesViewJs.NegociacoesView;
        }, function (_uiModelsMensagemJs) {
            Mensagem = _uiModelsMensagemJs.Mensagem;
        }, function (_uiViewMensagemViewJs) {
            MensagemView = _uiViewMensagemViewJs.MensagemView;
        }, function (_domainNegociacaoNegociacaoServiceJs) {
            NegociacaoService = _domainNegociacaoNegociacaoServiceJs.NegociacaoService;
        }, function (_utilDaoFactoryJs) {
            getNegociacaoDao = _utilDaoFactoryJs.getNegociacaoDao;
        }, function (_domainNegociacaoNegociacaoJs) {
            Negociacao = _domainNegociacaoNegociacaoJs.Negociacao;
        }, function (_uiConvertersDateConverterJs) {
            DateConverter = _uiConvertersDateConverterJs.DateConverter;
        }],
        execute: function () {

            /*
             */
            class NegociacaoController {

                constructor() {
                    let $ = document.querySelector.bind(document);

                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');

                    this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');

                    this._mensagem = new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto');

                    this._service = new NegociacaoService();

                    this._init();
                }

                _init() {
                    getNegociacaoDao().then(dao => dao.listaTodos()).then(negociacoes => negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))).catch(err => this._mensagem.texto = err);
                }

                adiciona(event) {
                    // cancelando a submissão do formulário

                    event.preventDefault();
                    try {

                        let negociacao = this.criarNegociacao(this._inputData, this._inputQuantidade, this._inputValor);

                        getNegociacaoDao().then(dao => dao.adiciona(negociacao)).then(() => {
                            console.log('adiciona');
                            this._negociacoes.adiciona(negociacao);
                            this._mensagem.texto = 'Negociação adiconada com Sucesso!!!';
                            this.limpaFormulario(this._inputData, this._inputQuantidade, this._inputValor);
                        }).catch(err => this._mensagem.texto = err);;
                    } catch (err) {
                        console.log('err', err);
                    }
                }

                esvazia() {
                    this._negociacoes.esvazia();
                }

                limpaFormulario(inputData, inputQuantidade, inputValor) {
                    inputData.value = '';
                    inputQuantidade.value = 1;
                    inputValor.value = 0.0;
                }

                criarNegociacao(inputData, inputQuantidade, inputValor) {
                    return new Negociacao(new Date(DateConverter.paraData(inputData.value)), parseInt(inputQuantidade.value), parseFloat(inputValor.value));
                }

                importaNegociacoes() {
                    // obterNegociacoesDaSemanaAnterior

                    this._service.obterNegociacoesDoPerildo().then(negociacoes => {
                        console.log('negociacoes', negociacoes);
                        negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._mensagem.texto = 'Negociações importadas com sucesso';
                    }).catch(error => this._mensagem.texto = error);
                }

                apaga() {
                    getNegociacaoDao().then(dao => dao.apagaTodos()).then(() => {
                        this._negociacoes.esvazia();
                        this._mensagem.texto = 'Negociações apagadas com sucesso';
                    }).catch(err => this._mensagem.texto = err);
                }
            }

            _export('NegociacaoController', NegociacaoController);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map