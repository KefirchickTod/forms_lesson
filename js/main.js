const plusStep = 1;
let QueryGet = function () {
    this.data = window
        .location
        .search
        .replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
};
const userDataJson = 'https://api.npoint.io/9736691522f21f75e1c5';

let totalPriceSelector = $(".totalPrice"); //0

function calcPlusMinus(selector, action){
    let $this = $(selector);
       let parentSelector = $this.parent();

    /** Отримати поточну ціну товару */
    let currentPrice = parentSelector.parent().find('.unitPrice').text(); //800
    
    /** Отримати кількіст вибраного товару */
    let currentNumber = parentSelector.find('.number').text(); //0;
    
    /** Отримати поточну загальну ціну усіх товарів в кошику */
    let currentTotalPrice = totalPriceSelector.text(); //0

    if(action === false){
        currentNumber = parseInt(currentNumber) - 1;
        
        if(currentNumber < 0){
            return;
        }
            currentTotalPrice = parseInt(currentTotalPrice) - parseInt(currentPrice);

    }
    if(action === true){
    currentNumber = parseInt(currentNumber) + plusStep;
        currentTotalPrice = parseInt(currentTotalPrice) + parseInt(currentPrice);
    }

 

    parentSelector.find('.number').text(currentNumber);
    totalPriceSelector.text(currentTotalPrice);

}

$('.plus').click(function(){
    calcPlusMinus($(this), true);
});

$('.moins').click(function(){
    calcPlusMinus($(this), false);
});









