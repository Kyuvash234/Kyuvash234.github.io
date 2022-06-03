" use strict"
price = 0;
function get_price(F_cost, S_cost, T_cost) {
    price = F_cost + S_cost + T_cost;
    return price;
}
let type_cost = '';
let adapt_cost = '';
let des_cost = '';

$(".raschet") => {
    if ($())
}

if (siteType == "1") {
    let type_cost = 2500;
}
 else if (siteType == "2") {
     let type_cost = 5000;
 }
else {
    type_cost = 15000;
}

if (adaptibility == "1") {
    adapt_cost = 1000;
}
else if (adaptibility == "2") {
    adapt_cost = 1500;
}
else {
    adapt_cost = 5000;
}

if (design == "1") {
    des_cost = 750;
}
else if (design == "2") {
    des_cost = 2500;
}
else {
    des_cost = 3500;
}

let res = "Стоимость вашего сайта: " + get_price(des_cost, adapt_cost, type_cost) + " рублей";
alert(res);