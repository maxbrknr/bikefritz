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
        'title': "E-Triton PT5 Lady 50cm",
        'info': "PT5 bedeutet: der Akku ist gut geschützt und elegant im Rahmen integriert.",
        'price': "3499",
        'sale': "2900"
    }
);

offers.push(
    {
        'section': "E-Trekkingräder",
        "title": "E-Lavena Forma 46cm",
        'info': "",
        'price': "2999",
        'sale': "2400"
    }
);

offers.push(
    {
        'section': "E-Trekkingräder",
        "title": "E-Bormio, Lady 50cm und Lady-Forma 52cm",
        'info': "",
        'price': "2999",
        'sale': "2600"
    }
);

offers.push(
    {
        'section': "E-Trekkingräder",
        "title": "E-Molvenao, Lady-Forma 52cm",
        'info': "",
        'price': "1999",
        'sale': "1799"
    }
);

offers.push(
    {
        'section': "E-Mountainbike",
        "title": "E-Antelao 18\"",
        'info': "",
        'price': "2999",
        'sale': "2500"
    }
);

offers.push(
    {
        'section': "E-Mountainbike",
        "title": "E-Hazard 20\"",
        'info': "",
        'price': "2599",
        'sale': "2100"
    }
);

offers.push(
    {
        'section': "E-Mountainbike",
        "title": "E-Tremalzo 18\"",
        'info': "",
        'price': "2699",
        'sale': "2199"
    }
);

offers.push(
    {
        'section': "E-Mountainbike",
        "title": "E-Scope 20\" (Testrad)",
        'info': "",
        'price': "3999",
        'sale': "2500"
    }
);

offers.push(
    {
        'section': "Rennräder und Gravelbikes",
        "title": "Izoard Comp disc 56cm (Mod. 2020)",
        'info': "",
        'price': "2499",
        'sale': ""
    }
);

offers.push(
    {
        'section': "Rennräder und Gravelbikes",
        "title": "Stelvio in versch. Größen (Mod. 2019)",
        'info': "",
        'price': "1299",
        'sale': "1050"
    }
);

offers.push(
    {
        'section': "Rennräder und Gravelbikes",
        "title": "San Remo in versch. Größen (Mod. 2020)",
        'info': "",
        'price': "999",
        'sale': ""
    }
);

offers.push(
    {
        'section': "Rennräder und Gravelbikes",
        "title": "Prestige rot 54cm",
        'info': "",
        'price': "1699",
        'sale': "1499"
    }
);

offers.push(
    {
        'section': "Rennräder und Gravelbikes",
        "title": "Prestige schwarz 56cm",
        'info': "",
        'price': "1699",
        'sale': "1499"
    }
);

offers.push(
    {
        'section': "Rennräder und Gravelbikes",
        "title": "Gavere 58cm (Mod. 2020)",
        'info': "",
        'price': "1299",
        'sale': ""
    }
);

offers.push(
    {
        'section': "Superschnäppchen für Sparfüchse",
        "title": "Ventoux disc 56cm Ultegra custom",
        'info': "Rennrad Vollcarbon, vom Chef gfahren und absolut neuwertig",
        'price': "3200",
        'sale': "2200"
    }
);

offers.push(
    {
        'section': "Superschnäppchen für Sparfüchse",
        "title": "FAT-Bike Stevens Mobster 18\"",
        'info': "",
        'price': "1499",
        'sale': "799"
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