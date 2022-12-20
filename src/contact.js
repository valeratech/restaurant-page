export function toggleContact() {
    const myContent = document.querySelector('#content');
    const myContact = document.querySelector('.contact');
    myContent.removeChild(myContent.firstElementChild);
    const article = document.createElement('article');
    article.className = 'contact';
    const headerOne = document.createElement('h2');
    headerOne.textContent = 'GET IN TOUCH';
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    const headerTwo = document.createElement('h2');
    headerTwo.textContent = 'Have a question?';
    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'CONTACT DETAILS GO HERE';
    const contentDiv = document.getElementById('content');
    contactInfo.appendChild(headerTwo);
    contactInfo.appendChild(paragraphOne);
    article.appendChild(headerOne);
    article.appendChild(contactInfo);
    contentDiv.appendChild(article);
}