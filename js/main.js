// let names = ['Mercurius', 'Venus', 'Aarde'];

// names.forEach((message, id) => console.log(id + ': ' + message));

// var kwadrateer = (input1) => input1 * input1;

let button = document.querySelector("#btn");

button.addEventListener('click', function(e) {
    document.querySelector('#change').classList.add('red');
});

button.addEventListener('click', function(e) {
    console.log("Klik! " + e.timeStamp);
});