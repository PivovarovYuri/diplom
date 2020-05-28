import "./pages/about.css";
import {ApiGit} from './scripts/api-git.js';
import {CommitCardList} from './scripts/commits-cardList.js';

const swiperContainer = document.querySelector('.swiper-wrapper');
const apiGit = new ApiGit({
    url: 'https://api.github.com/repos/pivovarovyuri/diplom/commits',
    headers: {
      authorization: 'e8fa496e8bde53a3f09ca17a37c403e74305de56',
      'Content-Type': 'application/json'
    }
})

apiGit.getCommits()
  .then((result) => {
    return new CommitCardList(swiperContainer, result);
})
  .catch((error) => {
  console.log(error);
})
