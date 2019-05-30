/**
 * Created by maxxi on 18.03.2016.
 */
"use strict";

var offers = [];

offers.push(
    {
        'section': "E-Tour Bikes Modelljahr 2019",
        'title': "E-Triton PT5 Lady 50cm",
        'info': "PT5 bedeutet: der Akku ist gut geschützt und elegant im Rahmen integriert.",
        'price': "3499",
        'sale': "2900"
    }
);

offers.push(
    {
        'section': "E-Tour Bikes Modelljahr 2018",
        'title': "E-Lavena PT5 Lady 50cm",
        'info': "PT5 bedeutet: der Akku ist gut geschützt und elegant im Rahmen integriert.",
        'price': "2999",
        'sale': "2499"
    }
);

offers.push(
    {
        'section': "E-Mountainbikes Modelljahr 2018",
        'title': "E-Juke+ 20",
        'info': "",
        'price': "3199",
        'sale': "2999"
    }
);

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
        'section': "MTB",
        'title': "Superleichte Kinder-MTBs in allen Farben in 20\" und mit 24\"-Laufrädern",
        'info': "",
        'price': "399",
        'sale': "349"
    }
);

offers.push(
    {
        'section': "MTB",
        'title': "Nema 16\"",
        'info': "",
        'price': "699",
        'sale': "649"
    }
);

offers.push(
    {
        'section': "MTB",
        'title': "Jura Carbon Fully Modelljahr 2018",
        'info': "",
        'price': "2999",
        'sale': "2199"
    }
);

offers.push(
    {
        'section': "MTB",
        'title': "Jura Carbon ES Fully Modelljahr 2018",
        'info': "",
        'price': "4299",
        'sale': "2899"
    }
);

offers.push(
    {
        'section': "MTB",
        'title': "Sentiero Modelljahr 2018",
        'info': "",
        'price': "1499",
        'sale': "1199"
    }
);

offers.push(
    {
        'section': "Crossbikes",
        'title': "X3",
        'info': "",
        'price': "499",
        'sale': "449"
    }
);

offers.push(
    {
        'section': "Crossbikes",
        'title': "X5",
        'info': "",
        'price': "799",
        'sale': "739"
    }
);

offers.push(
    {
        'section': "Crossbikes",
        'title': "X6 Lady disc 46cm, weiß Modelljahr 2018",
        'info': "",
        'price': "999",
        'sale': "799"
    }
);

offers.push(
    {
        'section': "Rennräder",
        'title': "Ventoux disc, kompl. Ultegra 52, 54 und 58cm",
        'info': "",
        'price': "3099",
        'sale': "2299"
    }
);

offers.push(
    {
        'section': "Rennräder",
        'title': "Aspin 56cm",
        'info': "",
        'price': "1599",
        'sale': "1399"
    }
);

offers.push(
    {
        'section': "Vorführräder",
        'title': "FAT-bike Mobster 18\"",
        'info': "",
        'price': "1499",
        'sale': "890"
    }
);

offers.push(
    {
        'section': "Vorführräder",
        'title': "Cyclocross Namur 52cm",
        'info': "",
        'price': "1199",
        'sale': "890"
    }
);

offers.push(
    {
        'section': "Vorführräder",
        'title': "Rennrad Ventoux disc 56cm",
        'info': "",
        'price': "3200",
        'sale': "2199"
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