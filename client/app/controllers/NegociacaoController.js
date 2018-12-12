System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
    "use strict";

    var Negociacoes, NegociacaoService, Negociacao, NegociacoesView, Mensagem, MensagemView, DateConverter, Bind, getNegociacaoDao, debounce, controller;
    return {
        setters: [function (_domainIndexJs) {
            Negociacoes = _domainIndexJs.Negociacoes;
            NegociacaoService = _domainIndexJs.NegociacaoService;
            Negociacao = _domainIndexJs.Negociacao;
        }, function (_uiIndexJs) {
            NegociacoesView = _uiIndexJs.NegociacoesView;
            Mensagem = _uiIndexJs.Mensagem;
            MensagemView = _uiIndexJs.MensagemView;
            DateConverter = _uiIndexJs.DateConverter;
        }, function (_utilIndexJs) {
            Bind = _utilIndexJs.Bind;
            getNegociacaoDao = _utilIndexJs.getNegociacaoDao;
            debounce = _utilIndexJs.debounce;
            controller = _utilIndexJs.controller;
        }],
        execute: function () {
            function _asyncToGenerator(fn) {
                return function () {
                    var gen = fn.apply(this, arguments);
                    return new Promise(function (resolve, reject) {
                        function step(key, arg) {
                            try {
                                var info = gen[key](arg);
                                var value = info.value;
                            } catch (error) {
                                reject(error);
                                return;
                            }

                            if (info.done) {
                                resolve(value);
                            } else {
                                return Promise.resolve(value).then(function (value) {
                                    step("next", value);
                                }, function (err) {
                                    step("throw", err);
                                });
                            }
                        }

                        return step("next");
                    });
                };
            }

            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                Object['ke' + 'ys'](descriptor).forEach(function (key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;

                if ('value' in desc || desc.initializer) {
                    desc.writable = true;
                }

                desc = decorators.slice().reverse().reduce(function (desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc);

                if (context && desc.initializer !== void 0) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = undefined;
                }

                if (desc.initializer === void 0) {
                    Object['define' + 'Property'](target, property, desc);
                    desc = null;
                }

                return desc;
            }

            var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

            let NegociacaoController = (_dec = controller('#data', '#quantidade', '#valor'), _dec2 = debounce(), _dec3 = debounce(1500), _dec(_class = (_class2 = class NegociacaoController {

                constructor(inputData, inputQuantidade, inputValor) {
                    let $ = document.querySelector.bind(document);

                    this._inputData = inputData;
                    this._inputQuantidade = inputQuantidade;
                    this._inputValor = inputValor;

                    this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia');

                    this._mensagem = new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto');

                    this._service = new NegociacaoService();

                    this._init();
                }

                _init() {
                    var _this = this;

                    return _asyncToGenerator(function* () {
                        try {

                            const dao = yield getNegociacaoDao();
                            const negociacoes = yield dao.listaTodos();

                            negociacoes.forEach(function (negociacao) {
                                return _this._negociacoes.adiciona(negociacao);
                            });
                        } catch (err) {
                            _this._mensagem.texto = err;
                        }
                    })();
                }

                adiciona(event) {
                    var _this2 = this;

                    return _asyncToGenerator(function* () {
                        // cancelando a submissão do formulário

                        try {
                            event.preventDefault();
                            const negociacao = _this2.criarNegociacao(_this2._inputData, _this2._inputQuantidade, _this2._inputValor);

                            const dao = yield getNegociacaoDao();
                            yield dao.adiciona(negociacao);

                            _this2._negociacoes.adiciona(negociacao);
                            _this2._mensagem.texto = 'Negociação adiconada com Sucesso!!!';
                            _this2.limpaFormulario();
                        } catch (err) {
                            console.log('err', err);
                            _this2._mensagem.texto = err;
                        }
                    })();
                }

                esvazia() {
                    this._negociacoes.esvazia();
                }

                criarNegociacao(inputData, inputQuantidade, inputValor) {
                    return new Negociacao(new Date(DateConverter.paraData(inputData.value)), parseInt(inputQuantidade.value), parseFloat(inputValor.value));
                }

                importaNegociacoes() {
                    var _this3 = this;

                    return _asyncToGenerator(function* () {
                        // obterNegociacoesDaSemanaAnterior
                        try {

                            const negociacoes = yield _this3._service.obterNegociacoesDoPerildo();

                            negociacoes.forEach(function (negociacao) {
                                return _this3._negociacoes.adiciona(negociacao);
                            });

                            _this3._mensagem.texto = 'Negociações importadas com sucesso';
                        } catch (err) {
                            _this3._mensagem.texto = err;
                        }
                    })();
                }

                apaga() {
                    var _this4 = this;

                    return _asyncToGenerator(function* () {
                        try {
                            const dao = yield getNegociacaoDao();
                            yield dao.apagaTodos();
                            _this4._negociacoes.esvazia();
                            _this4._mensagem.texto = 'Negociações apagadas com sucesso';
                        } catch (err) {
                            _this4._mensagem.texto = err;
                        }
                    })();
                }

                /*  */

                limpaFormulario() {
                    this._inputData.value = '';
                    this._inputQuantidade.value = 1;
                    this._inputValor.value = 0.0;
                }
            }, (_applyDecoratedDescriptor(_class2.prototype, 'adiciona', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'adiciona'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'importaNegociacoes', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'importaNegociacoes'), _class2.prototype)), _class2)) || _class);

            _export('NegociacaoController', NegociacaoController);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map