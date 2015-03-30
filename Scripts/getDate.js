/*jslint plusplus: true*/
/*jshint onedef: true*/
/*jshint onevar: true*/
/*jslint browser: true*/
/*global $, jQuery, alert*/
    
$(document).ready(function () {
    "use strict";
    
    var date = new Date(), month = date.getMonth(), day = date.getDate(), weekday = date.getDay();

    function makeMonths() {

        switch (month) {
        case (0):
            updateClass('#jan', '#dec');
            break;
        case (1):
            updateClass('#feb', '#jan');
            break;
        case (2):
            updateClass('#mar', '#feb');
            break;
        case (3):
            updateClass('#apr', '#mar');
            break;
        case (4):
            updateClass('#may', '#apr');
            break;
        case (5):
            updateClass('#jun', '#may');
            break;
        case (6):
            updateClass('#jul', '#jun');
            break;
        case (7):
            updateClass('#aug', '#jul');
            break;
        case (8):
            updateClass('#sep', '#aug');
            break;
        case (9):
            updateClass('#oct', '#sep');
            break;
        case (10):
            updateClass('#nov', '#oct');
            break;
        case (11):
            updateClass('#dec', '#nov');
            break;
        }
        
        switch (weekday) {
        case (0):
            updateClass('#sunday', '#saturday');
            break;
        case (1):
            updateClass('#monday', '#sunday');
            break;
        case (2):
            updateClass('#tuesday', '#monday');
            break;
        case (3):
            updateClass('#wednesday', '#tuesday');
            break;
        case (4):
            updateClass('#thursday', '#wednesday');
            break;
        case (5):
            updateClass('#friday', '#thursday');
            break;
        case (6):
            updateClass('#saturday', '#friday');
            break;
        }
    }
    
    document.getElementById('at').innerHTML = "@";
    setInterval(function () {getTime(); makeMonths(); }, 1000);
    
});
