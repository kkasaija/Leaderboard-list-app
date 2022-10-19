const scoredisplay = document.querySelector('.list');

export const displayScores = (allMembers) => {
  const allUsers = (allMembers.result);
  let items = '';
  allUsers.forEach((allUsers, index) => {
    items += `<li class="${index % 2 !== 0 ? 'item' : 'item1'}">${allUsers.user}:<span> ${allUsers.score}</span></li>`;
    scoredisplay.innerHTML = items;
  });
};

export default displayScores;