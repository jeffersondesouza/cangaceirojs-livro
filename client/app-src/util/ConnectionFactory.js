export const ConnectionFactory = (() => {


    const stores = ['negociacoes'];
    let connection = null;
    let close = null;


    return class ConnectionFactory {

        constructor() {
            throw new Error('Static Class, não é possível criar uma instância da mesma')
        }


        static getConnection() {
            return new Promise((resolve, reject) => {

                if (connection) return resolve(connection);

                const openRequest = indexedDB.open('jscangaceiro', 2);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {
                    connection = e.target.result;

                    close = connection.close.bind(connection);

                    connection.close = () => {
                        throw new Error('Você não pode fechar diretamente a conexão');
                    };

                    resolve(connection);
                };

                openRequest.onerror = e => reject(e.target.error.name);

            })
        }


        static closeConnection() {
            if (connection) {
                close();
            }
        }


        static _createStores(connection) {
            stores.forEach(store => {
                // if sem bloco, mais sucinto!
                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
                connection.createObjectStore(store, {
                    autoIncrement:
                        true
                });
            });
        }
    }
})();