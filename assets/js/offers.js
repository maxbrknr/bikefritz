/**
 * Created by maxxi on 18.03.2016.
 */
"use strict";

var offers = [];

// offers.push(
//     {
//         'section': "",
//         "title": "",
//         'info': "",
//         'price': "",
//         'sale': ""
//     }
// );

offers.push(
    {
        'section': "E-Trekkingräder",
        "title": "E-Lavena Forma 46cm",
        'info': "",
        'price': "2799",
        'sale': "2399"
    }
);

offers.push(
    {
        'section': "E-Trekkingräder",
        "title": "E-Molveno Forma 52cm",
        'info': "",
        'price': "1999",
        'sale': "1799"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        "title": "E-Antelao 18\"",
        'info': "",
        'price': "2999",
        'sale': "2499"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        "title": "E-Hazard 20\"",
        'info': "",
        'price': "2599",
        'sale': "2099"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        "title": "E-Tremalzo 18\"",
        'info': "",
        'price': "2699",
        'sale': "2199"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes",
        "title": "E-Scope 20\" (Testrad)",
        'info': "",
        'price': "3999",
        'sale': "2499"
    }
);

offers.push(
    {
        'section': "Gravelbikes",
        "title": "Prestige rot 56cm mit leichtem Kratzer",
        'info': "",
        'price': "1699",
        'sale': "1399"
    }
);

offers.push(
    {
        'section': "Rennrad der Superklasse",
        "title": "Ventoux disc 56cm",
        'info': "Vollcarbon, Ultegra, absolut neuwertig, volle Garantie",
        'price': "3200",
        'sale': "1999"
    }
);

offers.push(
    {
        'section': "Rennräder",
        "title": "Aspin, 56cm",
        'info': "kompl Ultegra, super Zustand",
        'price': "1699",
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
            tmpl.querySelector('.offer-info').innerText = offer.info;
        } else {
            tmpl = document.getElementById('offer-template-no-info').content.cloneNode(true);
        }

        tmpl.querySelector('.offer-title').innerText = offer.title;
        tmpl.querySelector('.offer-price').innerText = "UVP: " + offer.price + ".- €";
        tmpl.querySelector('.offer-sale').innerText = "Unser Angebot: " + offer.sale + ".- €";

        offers_container.appendChild(tmpl);
    }
}