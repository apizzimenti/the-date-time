/*jslint browser: true*/
/*global $, jQuery, alert*/

function getTime() {
    "use strict";
    var newdate = new Date();
    document.getElementById('date').innerHTML = newdate.getDate().toString();
    document.getElementById('time').innerHTML = newdate.toLocaleTimeString();
}