const scoredisplay = document.querySelector('.list');

export const renderScore = (allMembers) => {
  const allUsers = (allMembers.result);
  let items = '';
  allUsers.forEach((allUsers) => {
    items += `<li class="listItem">${allUsers.user}:<span> ${allUsers.score}</span></li>`;
    scoredisplay.innerHTML = items;
  });
};

export default renderScore;