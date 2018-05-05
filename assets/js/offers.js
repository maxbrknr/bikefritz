/**
 * Created by maxxi on 18.03.2016.
 */
"use strict";

var offers = [];

offers.push(
    {
        'section': "E-Mountainbikes",
        'title': "E-Wave 16\"",
        'info': "",
        'price': "2299",
        'sale': "1990"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        'title': "E-Cayolle 20\"",
        'info': "",
        'price': "2999",
        'sale': "2599"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        'title': "E-Stoke-Lady 16\"",
        'info': "",
        'price': "2499",
        'sale': "2199"
    }
);

offers.push(
    {
        'section': "E-Crossbike",
        'title': "E-6X 55cm",
        'info': "",
        'price': "2699",
        'sale': "2299"
    }
);

offers.push(
    {
        'section': "Rennrad",
        'title': "Izoard 2017, Vollcarbonrahmen mit kompletter Shimano 105 Gruppe",
        'info': "",
        'price': "1799",
        'sale': "1350"
    }
);

offers.push(
    {
        'section': "Testbike",
        'title': "E-Agnello 20\"",
        'info': "",
        'price': "3599",
        'sale': "2690"
    }
);

// create array of arrays sorted by section

var offersBySection = {};

for (var i = 0; i < offers.length; i++) {

    if (!offersBySection[offers[i].section]) {
        offersBySection[offers[i].section] = [];
    }

    offersBySection[offers[i].section].push(offers[i]);
}

var offers_container = document.getElementById('offers_container');

for (var key in offersBySection) {

    var thisSectionOffers = [];
    thisSectionOffers = offersBySection[key];

    var tmplHeader = document.getElementById('offer-headline').content.cloneNode(true);
    tmplHeader.querySelector('.offer-subsection').innerText = " " + key;
    offers_container.appendChild(tmplHeader);

    for (var i = 0; i < thisSectionOffers.length; i++) {

        var offer = thisSectionOffers[i];
        var tmpl;

        if (offer.info) {
            tmpl = document.getElementById('offer-template').content.cloneNode(true);
            tmpl.querySelector('.offer-title').innerText = offer.title;
            tmpl.querySelector('.offer-info').innerText = offer.info;
            tmpl.querySelector('.offer-price').innerText = offer.price;
        } else {
            tmpl = document.getElementById('offer-template-no-info').content.cloneNode(true);
            tmpl.querySelector('.offer-title').innerText = offer.title;
            tmpl.querySelector('.offer-price').innerText = "UVP: " + offer.price + ".- €";
            tmpl.querySelector('.offer-sale').innerText = "Unser Angebot: " + offer.sale + ".- €";
        }


        offers_container.appendChild(tmpl);
    }
}