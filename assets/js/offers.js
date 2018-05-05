/**
 * Created by maxxi on 18.03.2016.
 */
"use strict";

var offers = [];

offers.push(
    {
        'section': "E-Bikes",
        'title': "E-Lavena Lady 500, 50cm",
        'info': "",
        'price': "2799",
        'sale': "2299"
    }
);

offers.push(
    {
        'section': "E-Bikes",
        'title': "E-Lavena Forma 46cm",
        'info': "",
        'price': "2299",
        'sale': "1899"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        'title': "E-Wave 16\" und 22\"",
        'info': "",
        'price': "2299",
        'sale': "1899"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        'title': "E-Cayolle 16\" und 18\"",
        'info': "",
        'price': "2799",
        'sale': "2299"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        'title': "E-Agnello16\", 18\" und 20\"",
        'info': "",
        'price': "3599",
        'sale': "2699"
    }
);

offers.push(
    {
        'section': "E-Crossbike",
        'title': "6X gent, 55cm",
        'info': "",
        'price': "2699",
        'sale': "2199"
    }
);

offers.push(
    {
        'section': "Rennräder",
        'title': "Arcalis 56cm, kompl. Ultegra mit Shimano Scheibenbremse",
        'info': "",
        'price': "2699",
        'sale': "2099"
    }
);

offers.push(
    {
        'section': "Rennräder",
        'title': "Stelvio 52cm, kompl 105er",
        'info': "",
        'price': "1299",
        'sale': "1099"
    }
);

offers.push(
    {
        'section': "MTBs",
        'title': "Tonga",
        'info': "",
        'price': "649",
        'sale': "529"
    }
);

offers.push(
    {
        'section': "MTBs",
        'title': "Taniwha",
        'info': "",
        'price': "749",
        'sale': "619"
    }
);

offers.push(
    {
        'section': "MTBs",
        'title': "Devil's Trail",
        'info': "",
        'price': "1199",
        'sale': "999"
    }
);

offers.push(
    {
        'section': "MTBs",
        'title': "Tremalzo",
        'info': "",
        'price': "1799",
        'sale': "1399"
    }
);

offers.push(
    {
        'section': "Trekking- und Tourenräder",
        'title': "4xlite Tour",
        'info': "",
        'price': "799",
        'sale': "599"
    }
);

offers.push(
    {
        'section': "Trekking- und Tourenräder",
        'title': "6xlite Tour",
        'info': "",
        'price': "999",
        'sale': "790"
    }
);

offers.push(
    {
        'section': "Trekking- und Tourenräder",
        'title': "Jazz Lady",
        'info': "",
        'price': "699",
        'sale': "550"
    }
);

offers.push(
    {
        'section': "Trekking- und Tourenräder",
        'title': "Savoye Forma",
        'info': "",
        'price': "899",
        'sale': "699"
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