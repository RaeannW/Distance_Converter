(function () {
    'use strict';

    document.getElementById('convert').addEventListener('submit', function (event) {

        event.preventDefault(); //prevents default behavior of submitting form and refreshing page

        let distance = document.getElementById('distance').value; //capture input
        distance = parseFloat(distance); //changes string input to float value

        let answer = document.getElementById('answer');

        if (distance) {
            let conversion = (distance * 1.609344).toFixed(3); //rounds to three decimal points
            // alert(conversion); use for testing purposes
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
        } else {
            answer.innerHTML = '<h2>Please provide a number</h2>'
        }
    });



})();