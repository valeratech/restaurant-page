export function toggleHome() {
    const myContent = document.querySelector('#content');
    const myContact = document.querySelector('.contact');
    myContent.removeChild(myContent.firstElementChild);
    const article = document.createElement('article');
    article.className = 'home';
    const infoBox = document.createElement('info-box');
    infoBox.className = 'info-box';
    const headerTwo = document.createElement('h2');
    headerTwo.textContent = 'BEST NUGGETS EVER';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
    const contentDiv = document.getElementById('content');
    contentDiv.append(article);
    article.append(infoBox);
    infoBox.append(headerTwo);
    infoBox.append(paragraph);
}