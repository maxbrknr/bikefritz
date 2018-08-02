"use strict";

// Global variables
var current_sale = "Sommerangebote 2018";
var new_offers = "0";


var currSaleElement = document.getElementById('to_sale');
if (typeof(currSaleElement) != 'undefined' && currSaleElement != null) {
    currSaleElement.innerHTML = "ZU " + current_sale.toUpperCase();
}

var badgeElement = document.getElementById('sale_badge');
if (typeof(badgeElement) != 'undefined' && badgeElement != null) {
    badgeElement.innerHTML = new_offers + " neu";
}

var currSaleElementArr = document.getElementsByClassName("current_sale");
for (var i = 0; i < currSaleElementArr.length; i++) {
    currSaleElementArr[i].innerHTML = current_sale;
}

//document.getElementById("to_sale_scrollspy").innerHTML = current_sales;

(function ($) {
    $(function () {

        $('.button-collapse').sideNav({'edge': 'left'});

    }); // end of document ready
})(jQuery); // end of jQuery name space