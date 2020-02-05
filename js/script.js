window.addEventListener('DOMContentLoaded', () => {

    function getData() {

        fetch('products.json')
            .then(response => response.json())
            .then(data => renderCard(data));

    }
    getData();

    function renderCard(data) {
        data.forEach(element => {
            const goodsWrapper = document.querySelector('.product__area');
            const card = document.createElement('div');
            card.innerHTML = `
            <div id="products_section">
            <div class="products_page pg_0">
                <div class="product product_horizontal">
                    <span class="product_code">Код: ${element.code}</span>
                    <div class="product_status_tooltip_container">
                        <span class="product_status">Наличие</span>
                    </div>
                    <div class="product_photo">
                        <a href="#" class="url--link product__link">
                            <img src="misc/df126-52f2-11e5-b9a9-00259036a192_220x220_1.jpg">
                        </a>
                    </div>
                    <div class="product_description">
                        <a href="#" class="product__link">${element.title}</a>
                    </div>
                    <div class="product_tags hidden-sm">
                        <p>Могут понадобиться:</p>
                        <a href="#" class="url--link">${element.assocProducts}</a>
                        <a href="#" class="url--link">${element.assocProducts}</a>
                        <a href="#" class="url--link">${element.assocProducts}</a>
                        <a href="#" class="url--link">${element.assocProducts}</a>
                        <a href="#" class="url--link">${element.assocProducts}</a>
                        <a href="#" class="url--link">${element.assocProducts}</a>
                    </div>
                    <div class="product_units">
                        <div class="unit--wrapper">
                            <div class="unit--select unit--active">
                                <p class="ng-binding">За м. кв.</p>
                            </div>
                            <div class="red unit--select">
                                <p class="ng-binding">За упаковку</p>
                            </div>
                        </div>
                    </div>
                    <p class="product_price_club_card">
                        <span class="product_price_club_card_text">По карте<br>клуба</span>
                        <span class="goldPrice">${element.priceGold}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                            </svg>
                         </span>
                    </p>
                    <p class="product_price_default">
                        <span class="retailPrice">${element.priceRetail}</span>
                        <span class="rouble__i black__i">
                            <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                            </svg>
                         </span>
                    </p>
                    <div class="product_price_points">
                        <p class="ng-binding">Можно купить за 231,75 балла</p>
                    </div>
                    <div class="list--unit-padd"></div>
                    <div class="list--unit-desc">
                        <div class="unit--info">
                            <div class="unit--desc-i"></div>
                            <div class="unit--desc-t">
                                <p>
                                    <span class="ng-binding">Продается упаковками:</span>
                                    <span class="unit--infoInn">1 упак. = ${element.unitRatioAlt} м. кв. </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="product__wrapper">
                        <div class="product_count_wrapper">
                            <div class="stepper">
                                <input class="product__count stepper-input" type="text" value="1">
                                <span class="stepper-arrow up"></span>
                                <span class="stepper-arrow down"></span>
                            </div>
                        </div>
                        <span class="btn btn_cart" data-url="/cart/" data-product-id="${element.productId}">
                            <svg class="ic ic_cart">
                               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                            </svg>
                            <span class="ng-binding">В корзину</span>
                        </span>
                    </div>
                </div>
            </div>
            </div> -->
                `;
            goodsWrapper.appendChild(card);


        });
        itemCounter();
        changeColor();
    }
    // getData();



    function itemCounter() {
        const arrowUp = document.querySelector('.stepper-arrow.up');
        const arrowDown = document.querySelector('.stepper-arrow.down');
        const display = document.querySelector('.product__count.stepper-input');
        let goldPrice = Number(document.querySelector('.goldPrice').textContent);
        let retailPrice = Number(document.querySelector('.retailPrice').textContent);
        let goldPriceSum = goldPrice;
        let retailPriceSum = retailPrice;

        goldPrice.innerHTML = goldPriceSum;


        arrowUp.addEventListener('click', () => {
            display.value++;
            let total = goldPriceSum += goldPrice;
            goldPrice.textContent = total;
            console.log(total);
            let totalRetail = retailPriceSum += retailPrice;
            console.log(totalRetail);
        });
        arrowDown.addEventListener('click', () => {
            display.value--;
            let sub = goldPriceSum -= goldPrice;
            console.log(sub);
            let retailSub = retailPriceSum -= retailPrice;
            console.log(retailSub);
        });
    };


    function changeColor() {
        const select = document.querySelector('.unit--select.unit--active');
        const nonSelect = document.querySelector('.red');

        select.addEventListener('click', () => {
            select.style = 'background-color:black;';
            nonSelect.style = 'background-color:white;color:white;';

        });
        nonSelect.addEventListener('click', () => {
            nonSelect.style = 'background-color:black;color:white;';
            select.style = 'background-color:white;';

        });

    }





});