let n1 = new Negociacao(new Date(), 10, 20);

console.log('quantidade: ', n1.quantidade);
console.log('valor: ', n1.valor);
console.log('data: ', n1.data);

n1._quantidade = 10000;
console.log(n1.quantidade);








/*  */
let campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

let tbody = document.querySelector('table tbody');


document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    let tr = document.createElement('tr');

    campos.forEach(function (campo) {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });


    let tdVolume = document.createElement('td');

    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);


    // limpa o campo da data
    campos[0].value = '';
    // limpa o campo da quantidade
    campos[1].value = 1;
    // limpa o campo do valor
    campos[2].value = 0;
    // foca no campo da data
    campos[0].focus();
});