System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class DateConverter {

                constructor() {
                    throw new Error('Esta classe não pode ser instanciada');
                }

                static paraTexto(data) {
                    return data.toLocaleDateString();
                }

                static paraData(texto) {
                    console.log('texto', texto);

                    if (!/^\d{4}-\d{2}-\d{2}/.test(texto)) {
                        throw new Error('A data nao egue o padrão correto');
                    }

                    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
                }
            }

            _export('DateConverter', DateConverter);
        }
    };
});
//# sourceMappingURL=DateConverter.js.map