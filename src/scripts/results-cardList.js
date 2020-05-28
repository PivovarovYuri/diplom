import {Card} from '../scripts/results-card.js';
import {getMonthName} from '../scripts/help-functions';
export const resultsErrorSearch = document.querySelector('.results__error_search');
export const showMoreButton = document.querySelector('.results__show-more');
export const resultsCardList = document.querySelector('.results__card-container');

/* Кнопка показать больше */
export const moreCards = (arr) => (event) => {
    event.preventDefault();
    for(let i = 3; i < arr['totalResults']; i += 3) {
        const arrPart = arr['articles'].splice(`${i}`, 3);
        if (arrPart.length < 3) {
            showMoreButton.classList.remove('results__show-more_active');
        } else {
            showMoreButton.classList.add('results__show-more_active');
        }
        return new CardList(resultsCardList).showMoreCards(arrPart);
    }
}

export class CardList {
    constructor(container) {
        this.container = container;
    }
    showCards(arr) {
        if (arr['totalResults'] === 0) {
            resultsErrorSearch.classList.add('results__error_active');
            showMoreButton.classList.remove('results__show-more_active');
        } else {
            resultsErrorSearch.classList.remove('results__error_active');
            if (arr['totalResults'] <= 3) {
                for(let i = 0; i < arr['totalResults']; i++) {
                  const cardData = {
                    pic: arr['articles'][i]['urlToImage'],
                    date: `${arr['articles'][i]['publishedAt'].substring(8, 10)} ${getMonthName(arr['articles'][i]['publishedAt'])}, ${arr['articles'][i]['publishedAt'].substring(0, 4)}`,
                    cardTitle: arr['articles'][i]['title'],
                    cardText: arr['articles'][i]['description'],
                    sourceUrl: arr['articles'][i]['url'],
                    sourceName: arr['articles'][i]['source']['name'],
                  }
                    const { cardElement } = new Card(cardData);
                    this.container.appendChild(cardElement);
                    showMoreButton.classList.remove('results__show-more_active');
                }
            } else {
                for(let i = 0; i < 3; i++) {
                  const cardData = {
                    pic: arr['articles'][i]['urlToImage'],
                    date: `${arr['articles'][i]['publishedAt'].substring(8, 10)} ${getMonthName(arr['articles'][i]['publishedAt'])}, ${arr['articles'][i]['publishedAt'].substring(0, 4)}`,
                    cardTitle: arr['articles'][i]['title'],
                    cardText: arr['articles'][i]['description'],
                    sourceUrl: arr['articles'][i]['url'],
                    sourceName: arr['articles'][i]['source']['name'],
                  }
                    const { cardElement } = new Card(cardData);
                    this.container.appendChild(cardElement);
                    showMoreButton.classList.add('results__show-more_active');
                }
            }
        }
    }

    showMoreCards(arr) {
        for(let i = 0; i < arr.length; i++) {
          const cardData = {
            pic: arr[i]['urlToImage'],
            date: `${arr[i]['publishedAt'].substring(8, 10)} ${getMonthName(arr[i]['publishedAt'])}, ${arr[i]['publishedAt'].substring(0, 4)}`,
            cardTitle: arr[i]['title'],
            cardText: arr[i]['description'],
            sourceUrl: arr[i]['url'],
            sourceName: arr[i]['source']['name'],
          }
            const { cardElement } = new Card(cardData);
            this.container.appendChild(cardElement);
        }
    }
    getStorageCards(arr) {
        if (arr['articles'].length === 0) {
            document.querySelector('.results__card-container').classList.remove('results__card-container_active');
            document.querySelector('.results__title-container').classList.add('results__title-container_active');
            resultsErrorSearch.classList.add('results__error_active');
        } else {
            document.querySelector('.results__card-container').classList.add('results__card-container_active');
            document.querySelector('.results__title-container').classList.add('results__title-container_active');
            resultsErrorSearch.classList.remove('results__error_active');
            showMoreButton.addEventListener('click', moreCards(arr));
            this.showCards(arr);
        }
    }
  }
