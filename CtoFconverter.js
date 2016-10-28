/**
 * Created by alexander.collazo424 on 10/18/16.
 */
//This script calculates Celsius to Fahrenheit

    function convert(degree) {
        var x;
        if (degree == "C") {
            x = document.getElementById("c").value * 9 / 5 + 32;
            document.getElementById("f").value = Math.round(x);
        } else {
            x = (document.getElementById("f").value - 32) * 5 / 9;
            document.getElementById("c").value = Math.round(x);
        }
    function calculate() {

    }







