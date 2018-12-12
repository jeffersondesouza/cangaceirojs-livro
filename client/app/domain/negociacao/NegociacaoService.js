System.register(['../../util/HttpService.js', './Negociacao.js'], function (_export, _context) {
    "use strict";

    var HttpService, Negociacao;
    return {
        setters: [function (_utilHttpServiceJs) {
            HttpService = _utilHttpServiceJs.HttpService;
        }, function (_NegociacaoJs) {
            Negociacao = _NegociacaoJs.Negociacao;
        }],
        execute: function () {
            class NegociacaoService {

                constructor() {
                    this.http = new HttpService();
                }

                obterNegociacoesDaSemana() {
                    return new HttpService().get('negociacoes/semana').then(negociacoes => negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))).catch(error => {
                        throw new Error('Não foi possível obter as negociações');
                    });
                }

                obterNegociacoesDaSemanaAnterior() {
                    return new HttpService().get('negociacoes/anterior').then(negociacoes => negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))).catch(error => {
                        throw new Error('Não foi possível obter as negociações da semana anterior');
                    });
                }

                obterNegociacoesDaSemanaRetrasada() {
                    return new HttpService().get('negociacoes/retrasada').then(negociacoes => negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))).catch(error => {
                        throw new Error('Não foi possível obter as negociações da semana retrasada');
                    });
                }

                obterNegociacoesDoPerildo() {
                    return Promise.all([this.obterNegociacoesDaSemana(), this.obterNegociacoesDaSemanaAnterior(), this.obterNegociacoesDaSemanaRetrasada()]).then(semanasList => semanasList.reduce((t, a) => [...t, ...a], []).sort((a, b) => a.data.getTime() - b.data.getTime())).catch(err => {
                        console.log(err);
                        throw new Error('Não foi possível obter as negociações do período');
                    });
                }

            }

            _export('NegociacaoService', NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map