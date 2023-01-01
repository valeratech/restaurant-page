export function toggleMenu() {
    const article = document.createElement('article');
    const menuBox = document.createElement('div');
    const myContent = document.querySelector('#content');
    const headerTwo = document.createElement('h2');
    const paragraph = document.createElement('p');
    menuBox.className = 'menu-box';
    article.className = 'menu';
    headerTwo.textContent = 'Nuggets';
    paragraph.textContent = 'Our custom 100% blend, never frozen, no hormones or antibiotics ever, humanely raised and grazed in the USA';
    article.appendChild(headerTwo);
    article.appendChild(paragraph);
    article.appendChild(menuBox);
    myContent.removeChild(myContent.firstElementChild);
    myContent.appendChild(article);

    let subHeader1 = document.createElement('h4')
    subHeader1.textContent = 'Small Chicken Nuggets'
    let paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price1 = document.createElement('p');
    price1.textContent = '$3.39 · 230 cals';


    let subHeader2 = document.createElement('h4')
    subHeader2.textContent = 'Small Chicken Nuggets'
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price2 = document.createElement('p');
    price2.textContent = '$3.39 · 230 cals';

    let subHeader3 = document.createElement('h4')
    subHeader3.textContent = 'Small Chicken Nuggets'
    let paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price3 = document.createElement('p');
    price3.textContent = '$3.39 · 230 cals';

    let subHeader4 = document.createElement('h4')
    subHeader4.textContent = 'Small Chicken Nuggets'
    let paragraph4 = document.createElement('p');
    paragraph4.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price4 = document.createElement('p');
    price4.textContent = '$3.39 · 230 cals';

    let subHeader5 = document.createElement('h4')
    subHeader5.textContent = 'Small Chicken Nuggets'
    let paragraph5 = document.createElement('p');
    paragraph5.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price5 = document.createElement('p');
    price5.textContent = '$3.39 · 230 cals';

    let subHeader6 = document.createElement('h4')
    subHeader6.textContent = 'Small Chicken Nuggets'
    let paragraph6 = document.createElement('p');
    paragraph6.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price6 = document.createElement('p');
    price6.textContent = '$3.39 · 230 cals';

    let subHeader7 = document.createElement('h4')
    subHeader7.textContent = 'Small Chicken Nuggets'
    let paragraph7 = document.createElement('p');
    paragraph7.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price7 = document.createElement('p');
    price7.textContent = '$3.39 · 230 cals';

    let subHeader8 = document.createElement('h4')
    subHeader8.textContent = 'Small Chicken Nuggets'
    let paragraph8 = document.createElement('p');
    paragraph8.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price8 = document.createElement('p');
    price8.textContent = '$3.39 · 230 cals';

    let subHeader9 = document.createElement('h4')
    subHeader9.textContent = 'Small Chicken Nuggets'
    let paragraph9 = document.createElement('p');
    paragraph9.textContent = 'Crispy, whole white-meat bites served with honey mustard or BBQ (contains milk, wheat, soy, and gluten)'
    let price9 = document.createElement('p');
    price9.textContent = '$3.39 · 230 cals';

    const menuList = [
        [subHeader1, paragraph1, price1],
        [subHeader2, paragraph2, price2],
        [subHeader3, paragraph3, price3],
        [subHeader4, paragraph4, price4],
        [subHeader5, paragraph5, price5],
        [subHeader6, paragraph6, price6],
        [subHeader7, paragraph7, price7],
        [subHeader8, paragraph8, price8],
        [subHeader9, paragraph9, price9]
    ];



    for (let x = 0; x < 9; x++) {
        let menuTile = document.createElement('div');
        menuTile.className = 'menu-tiles';

        menuBox.appendChild(menuTile);

        let menuImg = document.createElement('div');
        menuImg.className = 'menu-image';
        let image = document.createElement('img');
        image.src = '../src/assets/menu-nuggets1.jpg';
        image.alt = 'Delicious looking nuggets';
        menuImg.appendChild(image);

        let menuText = document.createElement('div');
        menuText.className = 'menu-text';


        menuTile.appendChild(menuImg);
        menuTile.appendChild(menuText);

        for (let y = 0; y < 3; y++)
            menuText.appendChild(menuList[x][y])
    }
}