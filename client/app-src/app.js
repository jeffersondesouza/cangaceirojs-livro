
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../css/meucss.css'

import { NegociacaoController } from './controllers/NegociacaoController';

const $ = document.querySelector.bind(document);

let negociacaoController = new NegociacaoController();

$('.form')
    .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController));

$('#botao-apaga')
    .addEventListener('click', negociacaoController.apaga.bind(negociacaoController));

$('#botao-importa')
    .addEventListener('click', negociacaoController.importaNegociacoes.bind(negociacaoController));



