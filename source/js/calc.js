" use strict"

let t = 0;
let a = 0;
let d = 0;
let price = 0;

function getPrice() {
    price = a + t + d;
    return price;
};

$("#type").on("change" function() {
    t = $('#type').val();
    $('.priceOfWork').text(getPrice() + " рублей");
    
});

$("#des").on("change" function() {
    d = $('#des').val();
    $('.priceOfWork').text(getPrice() + " рублей");
});

$("#adapt").on("change" function() {
    a = $('#adapt').val();
    $('.priceOfWork').text(getPrice() + " рублей");
});

$('.priceOfWork').text(getPrice() + " рублей");



