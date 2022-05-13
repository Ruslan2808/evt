const name = localStorage.getItem("name");
const jew = jewelry.find(el => el.name === name);

const main = document.querySelector("main");
let activeSlide = 0;

main.innerHTML =
    `<h2 class="title-jewelry">ПРОСМОТР УКРАШЕНИЯ</h2>
     <div class="view-content-wrapper"> 
       <div class="slider">
            <div class="slider-body">
                <div><img src="${jew.image[0]}"></div>
                <div><img src="${jew.image[1]}"></div>
                <div><img src="${jew.image[2]}"></div>
            </div>
            <div class="slider-btns">
                <button class="slider-prev"><img data-slider="prev" src="./images/actions/prev.png"></button>
                <button class="slider-next"><img data-slider="next" src="./images/actions/next.png"></button>
            </div>
        </div>
        <div class="description-wrapper">
            <h2 class="title-jewelry">${jew.name}</h2>
            <p class="desc-text">БРЕНД: ${jew.brand}</p>
            <p class="desc-text">ТИП УКРАШЕНИЯ: ${jew.type}</p>
            <p class="desc-text">МАТЕРИАЛ: ${jew.materials.join(', ')}</p>            
            <p class="desc-text">ЦЕНА: ${jew.price} BYN</p>
            <div class="btn-wrapper">
                <a class="add-btn">ДОБАВИТЬ В КОРЗИНУ</a>
                <img class="img-like" src="images/actions/likes.png">
            </div>
            <p class="phone-text">ЗАКАЗАТЬ ПО ТЕЛЕФОНУ <a  href="tel:+375000000000">+375-(00) 000-00-00</a></p>
            <a class="search-store">НАЙТИ В МАГАЗИНЕ</a>    
        </div>
     </div>`;

const buttons = document.querySelector('.slider-btns');
const sliderBody = document.querySelector('.slider-body');

buttons.addEventListener('click', (e) => {
    const target = e.target;
    if (target.dataset.slider === 'prev') {
        activeSlide -= 1;
        if (activeSlide < 0) {
            activeSlide = 2;
        }
        checkActiveSlide();
    } else if (target.dataset.slider === 'next') {
        activeSlide += 1;
        if (activeSlide > 2) {
            activeSlide = 0;
        }
        checkActiveSlide();
    }
});

function checkActiveSlide() {
    sliderBody.style.transform = `translateX(-${activeSlide * 100 / 3}%)`;
}

checkActiveSlide();




