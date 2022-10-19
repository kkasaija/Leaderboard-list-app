const list = document.querySelector('.list');

const renderScores = (allMembers) => {
  const allUsers = (allMembers.result);
  let items = '';
  allUsers.forEach((allUsers, index) => {
    items += `<p class="${index % 2 !== 0 ? 'item' : 'item1'}">${allUsers.user}:<span> ${allUsers.score}</span></p>`;
    list.innerHTML = items;
  });
};

module.exports = renderScores;
