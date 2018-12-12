System.register(['./ConnectionFactory.js', './../domain/negociacao/NegociacaoDao.js'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, NegociacaoDao;
    return {
        setters: [function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_domainNegociacaoNegociacaoDaoJs) {
            NegociacaoDao = _domainNegociacaoNegociacaoDaoJs.NegociacaoDao;
        }],
        execute: function () {
            const getNegociacaoDao = () => ConnectionFactory.getConnection().then(conn => new NegociacaoDao(conn));

            _export('getNegociacaoDao', getNegociacaoDao);
        }
    };
});
//# sourceMappingURL=DaoFactory.js.map