export function toggleMenu() {
    const article = document.createElement('article');
    const menuBox = document.createElement('div');
    const myContent = document.querySelector('#content');
    const headerTwo = document.createElement('h2');
    const paragraphOne = document.createElement('p');
    menuBox.className = 'menu-box';
    article.className = 'menu';
    headerTwo.textContent = 'Nuggets';
    paragraphOne.textContent = 'Our custom 100% blend, never frozen, no hormones or antibiotics ever, humanely raised and grazed in the USA';
    article.appendChild(headerTwo);
    article.appendChild(paragraphOne);
    article.appendChild(menuBox);
    myContent.removeChild(myContent.firstElementChild);
    myContent.appendChild(article);

    const menuList = [

    ]


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
    }
}