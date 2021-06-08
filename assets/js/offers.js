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
        'section': "E-Mountainbike",
        "title": "E-Whaka ES 18\"",
        'info': "E-Mountainbike der Spitzenklasse für Körpergröße 160 bis 170cm (plus-minus) \
            neuester und stärkster Shimanomotor EP 800 und 630er Akku, Rock Shox Gabel und mit \
            kompletter XT-Ausstattung; nagelneu!",
        'price': "5400",
        'sale': "4600"
    },
    {
        'section': "E-Mountainbike",
        "title": "E-Whaka ES 18\"",
        'info': "E-Mountainbike Fully aus Modelljahr 2020",
        'price': "5399",
        'sale': "3900"
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