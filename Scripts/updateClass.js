/*jslint browser: true*/
/*global $, jQuery, alert*/

function updateClass(id, lMonth) {
    "use strict";
    $(id).addClass('active');
    $(lMonth).removeClass('active');
}
