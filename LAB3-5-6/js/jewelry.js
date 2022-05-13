const main = document.querySelector("main");

main.innerHTML = 
    `<h2 class="title-jewelry">УКРАШЕНИЯ</h2>
     <div class="content-wrapper">
        <div class="card-wrapper"></div>
        <div class="filter-wrapper">
            <div class="search-wrapper">
                <input class="search-field" placeholder="Поиск">
                <input type="image" class="search-img" src="images/actions/search.png" alt="search">
            </div>
            <div class = "sort-wrapper">
                <div class = "sort">
                    <p class="sort-text">СОРТИРОВАТЬ:</p>
                    <div class="radio-string">
                        <input id="dsc" class="sort-radio" type="radio" name="sort">      
                        <label class="sort-text">по убыванию цены</label></br>      
                    </div>
                    <div class="radio-string">
                        <input id="asc" class="sort-radio" type="radio" name="sort">
                        <label class="sort-text">по возрастанию цены</label>     
                    </div>
                </div>
                <div class = "sort">
                    <p class="sort-text">ТИП УРАШЕНИЯ:</p>
                    <div class="type-sort"></div>
                </div>
                <div class = "sort">
                    <p class="sort-text">МАТЕРИАЛ:</p>
                    <div class="material-sort"></div>
                </div>
            </div>
             <a href="" class="reset-filter">сбросить фильтр</a>
        </div> 
     </div>`;

let currentJewelry = jewelry;

const cards = document.querySelector(".card-wrapper");

cards.innerHTML = "";
printJewelry(currentJewelry);

/*Search*/

const search = document.querySelector(".search-img");
const searchText = document.querySelector(".search-field");

search.addEventListener("click", () => {
    cards.innerHTML = "";
    currentJewelry = [];
    jewelry.forEach(j => {
        const text = searchText.value.trim().toLowerCase();
        if (j.name.toLowerCase().indexOf(text) != -1 || j.brand.toLowerCase().indexOf(text) != -1) {
            currentJewelry.push(j);
        }
    });
    if (currentJewelry.length != 0) {
        printJewelry(currentJewelry);
    } else {
        cards.innerHTML = `<p class="jewelry-not-found">Украшения не найдены</p>`
    }
});

/*Sort*/

const sortDesc = document.querySelector("#dsc");
sortDesc.addEventListener("click", () => {
    cards.innerHTML = "";
    currentJewelry.sort((a,b) => b.price - a.price);
    printJewelry(currentJewelry);
});

const sortAsc = document.querySelector("#asc");
sortAsc.addEventListener("click", () => {
    cards.innerHTML = "";
    currentJewelry.sort((a,b) => a.price - b.price);
    printJewelry(currentJewelry);
});

/*Types*/

const divTypes = document.querySelector(".type-sort");

const types = new Set();
jewelry.forEach(j => {
    types.add(j.type);
});

types.forEach(type => {
    divTypes.innerHTML +=
        `<div class="radio-string">
            <input class="sort-radio" type="radio" name="type" value=${type}>      
            <label class="sort-text">${type}</label></br>      
         </div>`;
});

let currentType = "";

const radioTypes = document.querySelectorAll(".type-sort > .radio-string");
radioTypes.forEach(radioType => {
    const inputType = radioType.querySelector(".sort-radio");
    const labelType = radioType.querySelector(".sort-text");
    inputType.addEventListener("click", () => {
        currentType = labelType.textContent;
        cards.innerHTML = "";
        currentJewelry = [];
        jewelry.forEach(j => {
            if (currentMaterial.length != 0) {
                if (j.type === currentType && j.materials.includes(currentMaterial)) {
                    currentJewelry.push(j);
                }
            } else {
                if (j.type === currentType) {
                    currentJewelry.push(j);
                }
            }
        });
        if (currentJewelry.length != 0) {
            printJewelry(currentJewelry);
        } else {
            cards.innerHTML = `<p class="jewelry-not-found">Украшения не найдены</p>`
        }
    });
});

/*Materials*/

const divMaterials = document.querySelector(".material-sort");

const materials = new Set();
jewelry.forEach(j => {
    j.materials.forEach(material => {
        materials.add(material);
    })
});

materials.forEach(material => {
    divMaterials.innerHTML +=
        `<div class="radio-string">
            <input class="sort-radio" type="radio" name="material" value=${material}>      
            <label class="sort-text">${material}</label></br>      
        </div>`;
});

let currentMaterial = "";

const radioMaterials = document.querySelectorAll(".material-sort > .radio-string");
radioMaterials.forEach(radioMaterial => {
    const inputMaterial = radioMaterial.querySelector(".sort-radio");
    const labelMaterial = radioMaterial.querySelector(".sort-text");
    inputMaterial.addEventListener("click", () => {
        currentMaterial = labelMaterial.textContent;
        cards.innerHTML = "";
        currentJewelry = [];
        jewelry.forEach(j => {
            if (currentType.length != 0) {
                if (j.materials.includes(currentMaterial) && j.type === currentType) {
                    currentJewelry.push(j);
                }
            } else {
                if (j.materials.includes(currentMaterial)) {
                    currentJewelry.push(j);
                }
            }
        });
        if (currentJewelry.length != 0) {
            printJewelry(currentJewelry);
        } else {
            cards.innerHTML = `<p class="jewelry-not-found">Украшения не найдены</p>`
        }
    });
});

/*Print jewelry*/

function printJewelry(jewelry) {
    jewelry.forEach(j => {
        cards.innerHTML +=
            `<div class="card">
                <img src=${j.image[0]} alt="${j.name}">
                <p class="card-name">${j.name}</p>
                <p class="card-price">${j.price} BYN</p>
                <a href="view.html" onclick="localStorage.setItem('name','${j.name}');"  class="card-view">просмотр</a> 
             </div>`;
    });
}
