import './style.css';
import { renderScore } from './modules/renderContent.js';

const username = document.querySelector('.name');
const userscore = document.querySelector('.score');
const refresh = document.querySelector('.refresh');
const destUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XHmekmxwN3miwlSA9RaS/scores/';

// get scores

const retrieveScore = async () => {
  const response = await fetch(destUrl);
  const data = await response.json();
  renderScore(data);
};

refresh.addEventListener('click', () => {
  retrieveScore();
});

const submitForm = async () => {
  // Data to be submitted

  const info = {
    user: username.value,
    score: userscore.value,
  };

  // Message formart
  const dataFormart = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  };

  const response = fetch(destUrl, dataFormart);
  const data = await (await response).json();
  username.value = '';
  userscore.value = '';
  return data;
};

// create users
const gameForm = document.querySelector('.formcontent');
gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitForm();
});
