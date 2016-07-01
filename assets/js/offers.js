/**
 * Created by maxxi on 18.03.2016.
 */
"use strict";

var offers = [];
offers.push({
    'title': "Testrennrad Stevens Ventoux",
    'info': "kompl SRAM Red-Gruppe und Cetic Systemlaufrädern in Rahmenhöhe 56cm, neuwertig, volle Garantie",
    'price': "Sonderpreis 2290,-- statt 3290,--"
});
offers.push({
    'title': "Mountainbike Stevens Sentiero",
    'info': "20\" und 16\" 29er bzw. 27,5er Laufräder XT/SLX, RockShox , Mod. 2015",
    'price': "Statt 1499,--"
});
offers.push({
    'title': "Müsing Fully Petrol 3",
    'info': "XT/Deore, RockSchox Pike-Gabel RockShox Dämpfer, 27,5\" Laufräder Rahmenhöhe 47cm,",
    'price': "Statt 2200,--, jetzt 1750,--"
});


var offers_container = document.getElementById('offers_container');


for (var i = 0; i < offers.length; i++) {
    var offer = offers[i];
    var tmpl = document.getElementById('offer-template').content.cloneNode(true);

    tmpl.querySelector('.offer-title').innerText = offer.title;
    tmpl.querySelector('.offer-info').innerText = offer.info;
    tmpl.querySelector('.offer-price').innerText = offer.price;

    offers_container.appendChild(tmpl);
}