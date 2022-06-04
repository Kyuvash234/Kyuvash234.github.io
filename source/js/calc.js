" use strict"
let price = 0;
function get_price(F_cost, S_cost, T_cost) {
    price = F_cost + S_cost + T_cost;
    return price;
}
let t = '';
let a = '';
let d = '';

let type_cost = $('.type').val();
let adapt_cost = $('.adapt').val();
let des_cost = $('.des').val();
if (type_cost == 1) {
    t = "2500";
};
if (type_cost == 2) {
    t = "5000";
};
if (type_cost == 3) {
    t = "20000";
};
if (adapt_cost == 1) {
    a = "1000";
};
if (adapt_cost == 2) {
    a = "2500";
};
if (adapt_cost == 3) {
    a = "5000";
};
if (des_cost == 1) {
    d = "500";
};
if (des_cost == 2) {
    d = "750";
};
if (des_cost == 3) {
    d = "2000";
};
let prc = get_price(t, a, d);

$('.priceOfWork').text(prc)
