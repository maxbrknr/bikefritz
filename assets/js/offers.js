/**
 * Created by maxxi on 18.03.2016.
 */
"use strict";

var offers = [];

offers.push(
    {
        'section': "E-Mountainbikes Modelljahr 2018",
        'title': "E-Wave",
        'info': "",
        'price': "2299",
        'sale': "1799"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes Modelljahr 2018",
        'title': "E-Stoke-Lady",
        'info': "",
        'price': "2499",
        'sale': "1999"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes Modelljahr 2018",
        'title': "E-Juke",
        'info': "",
        'price': "3199",
        'sale': "2599"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes Modelljahr 2018",
        'title': "E-Scope Testrad",
        'info': "",
        'price': "3999",
        'sale': "2999"
    }
);

offers.push(
    {
        'section': "Mountainbikes Modelljahr 2018",
        'title': "Colorado",
        'info': "",
        'price': "1999",
        'sale': "1599"
    }
);

offers.push(
    {
        'section': "Mountainbikes Modelljahr 2018",
        'title': "Sentiero",
        'info': "",
        'price': "1499",
        'sale': "1199"
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