import { ConnectionFactory } from './ConnectionFactory.js';
import { NegociacaoDao } from './../domain/negociacao/NegociacaoDao.js';

export const getNegociacaoDao = () =>
    ConnectionFactory
        .getConnection()
        .then(conn => new NegociacaoDao(conn));

