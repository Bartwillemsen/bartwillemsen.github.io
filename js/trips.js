function setFooterDate(element) {
    element.innerHTML = new Date().getFullYear();
}
const ws = new WebSocket('ws://localhost:3000/trips');
function addTrip() {

    let trips = [];
    if (window.localStorage['trips']) {
        trips = JSON.parse(window.localStorage['trips']);
    }

    let trip = {
        "where": document.querySelector('#inputWhere').value,
        "when": document.querySelector('#inputWhen').value,
        "why": document.querySelector('#inputWhy').value
    };
    console.log(trips);
    trip = JSON.stringify(trip);
    ws.onopen = function() {
        console.log('connection opened');

        ws.send(trip);
    };
    trips.push(trip);

    window.localStorage['trips'] = trip;
}

function loadTrips() {
    if (window.localStorage['trips']) {
        let trips = JSON.parse(window.localStorage['trips']);
    } else {
        let trips = [];
    }

    if (trips.length > 0) {
        for (let trip in trips) {
            let tripTemplate = document.querySelector('#dummyTrip');
            let tripDiv = tripTemplate.content.cloneNode(true);

            tripDiv.querySelector('.where').innerHTML = trips[trip].where;
            tripDiv.querySelector('.when').innerHTML = trips[trip].when;
            tripDiv.querySelector('.why').innerHTML = trips[trip].why;

            document.getElementById('trips').appendChild(tripDiv);
        }
    }
}
// var com;
// com = com || {};
// com.infosupport = com.infosupport || {};
// (function(namespace, undefined) {
//     var privateVar = 37;
//     function privateFunction() {
//         //
//     }

//     namespace.publicVar = 3.14;
//     namespace.publicFunction = function() {
//         //
//     }
// }(com.infosupport));

// console.log(com.infosupport.privateVar);