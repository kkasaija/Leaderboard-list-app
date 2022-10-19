const name = document.getElementById('name');
const score = document.getElementById('score');
const list = document.querySelector('.list');

const addScore = () => {
  if ((name.value.length >= 1) && (score.value.length >= 1)) {
    const newList = document.createElement('li');
    newList.classList.add('listItem');
    newList.innerText = `${name.value}:  ${score.value}`;
    list.appendChild(newList);
  }
};
module.exports = addScore;