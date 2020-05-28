export class Card {
    constructor(data) {
        this.cardElement = this.createCard(data);
    }
    createCard(data) {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('results__card');

        const cardPic = document.createElement('div');
        cardPic.classList.add('results__card-pic');
        cardPic.style.backgroundImage = `url(${data.pic})`;

        const cardDescription = document.createElement('div');
        cardDescription.classList.add('results__card-description');

        const cardDate = document.createElement('p');
        cardDate.classList.add('results__card-date');
        cardDate.textContent = data.date;

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('results__card-title');
        cardTitle.textContent = data.cardTitle;

        const cardText = document.createElement('p');
        cardText.classList.add('results__card-text');
        cardText.textContent = data.cardText;

        const cardPortal = document.createElement('a');
        cardPortal.classList.add('results__card-portal');
        cardPortal.classList.add('link');
        cardPortal.href = `${data.sourceUrl}`;
        cardPortal.target = '_blank';
        cardPortal.textContent = data.sourceName;

        cardDescription.appendChild(cardDate);
        cardDescription.appendChild(cardTitle);
        cardDescription.appendChild(cardText);
        cardDescription.appendChild(cardPortal);

        cardContainer.appendChild(cardPic);
        cardContainer.appendChild(cardDescription);

        return cardContainer;
    }
}
