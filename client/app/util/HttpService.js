System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class HttpService {

                get(url) {

                    return new Promise((resolve, reject) => {

                        const http = new XMLHttpRequest();

                        http.open('GET', url);

                        http.onreadystatechange = () => {
                            if (http.readyState == 4) {
                                if (http.status == 200) {
                                    resolve(JSON.parse(http.responseText));
                                } else {
                                    reject(http.responseText);
                                }
                            }
                        };
                        http.send();
                    });
                }

            }

            _export('HttpService', HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map