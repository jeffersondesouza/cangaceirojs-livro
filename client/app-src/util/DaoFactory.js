import { ConnectionFactory } from './ConnectionFactory';
import { NegociacaoDao } from './../domain/negociacao/NegociacaoDao';

export const getNegociacaoDao = () =>
    ConnectionFactory
        .getConnection()
        .then(conn => new NegociacaoDao(conn));

