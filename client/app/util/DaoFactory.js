const getNegociacaoDao = () =>
    ConnectionFactory
        .getConnection()
        .then(conn => new NegociacaoDao(conn));

