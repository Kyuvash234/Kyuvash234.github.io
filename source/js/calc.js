" use strict"
price = 0;
function get_price(F_cost, S_cost, T_cost) {
    price = F_cost + S_cost + T_cost;
    return price;
}


let siteType = prompt(`Пожалуйста, выберите тип сайта (введите порядковый номер необходимого варианта):
       1)Сайт-визитка
       2)Корпоративный сайт
       3)Мессенджер`,);
let adaptibility = prompt( `Пожалуйста, выберите адаптивность сайта (введите порядковый номер необходимого варианта):
        1)Для мобильных устройств и планшетов
        2)Для стационарных компьютеров и ноутбуков
        3)Кроссплатформенный сайт`,);
let design = prompt(`Пожалуйста, выберите дизайн сайта (введите порядковый номер необходимого варианта):
        1)Минималистичный
        2)Интерактивный
        3)Анимированный`,);


if (siteType == "1") {
    let type_cost = 2500;
}
 else if (siteType == "2") {
     let type_cost = "5000";
 }
else {
    let type_cost = "15000";
}

if (adaptibility == "1") {
    let adapt_cost = "1000";
}
else if (adaptibility == "2") {
    let adapt_cost = "1500";
}
else {
    let adapt_cost = "5000";
}

if (design == "1") {
    let des_cost = "750";
}
else if (design == "2") {
    let des_cost = "2500";
}
else {
    let des_cost = "3500";
}

let res = "Стоимость вашего сайта: " + get_price(des_cost, adapt_cost, type_cost) + " рублей";
alert(res);