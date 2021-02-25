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
//Селектор (HTML - тег) в якому зберігається загальна сума
let totalPriceSelector = $(".totalPrice"); //0
//Оголошуєм (створює функція ) з аргументами селектор і дія (дія - true(+) || false(-1))  
function calcPlusMinus(selector, action){
    //
    let $this = $(selector); // Обгортаєм селекторв  в обєкт jquery
       let parentSelector = $this.parent(); // отрмаєм батьківський елемент для того щоб найти необхідний елемент

    /** Отримати поточну ціну товару */
    let currentPrice = parentSelector.parent().find('.unitPrice').text(); //800 шукаємо ціну товару
    
    /** Отримати кількіст вибраного товару */
    let currentNumber = parentSelector.find('.number').text(); //0;
    
    /** Отримати поточну загальну ціну усіх товарів в кошику */
    let currentTotalPrice = totalPriceSelector.text(); //0

    if(action === false){ //Логіка якшо дія віднімання 
        currentNumber = parseInt(currentNumber) - 1;
        
        if(currentNumber < 0){ //якщо кількість вибраних товарів менше 1 виходимо з функції
            return;
        }
            currentTotalPrice = parseInt(currentTotalPrice) - parseInt(currentPrice);

    }
    if(action === true){//Якшо дія додавання
    currentNumber = parseInt(currentNumber) + plusStep;
        currentTotalPrice = parseInt(currentTotalPrice) + parseInt(currentPrice);
    }

 

    parentSelector.find('.number').text(currentNumber); //присвоюєм кількість +1
    totalPriceSelector.text(currentTotalPrice);//виводимо загальну суму

}

$('.plus').click(function(){
    calcPlusMinus($(this), true); //$(this) - селектор, тру дія
});

$('.moins').click(function(){
    calcPlusMinus($(this), false);
});









