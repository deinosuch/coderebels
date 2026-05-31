let users = [];
const template = document.querySelector(".template");
const cardList = document.querySelector(".card-list");
const searchBar = document.querySelector(".search");

const getUsers = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
};

const generateCards = (users) => {
  users.map((card, index) => {
    let clonedNode = template.cloneNode(true);
    let monsterImg = clonedNode.querySelector(".monster-img");
    let monsterName = clonedNode.querySelector(".monster-name");
    let monsterEmail = clonedNode.querySelector(".monster-email");
    monsterImg.src = `https://robohash.org/${index}?set=set2`;
    monsterName.innerText = card.name;
    monsterEmail.innerText = card.email;
    clonedNode.classList.remove("template");
    cardList.appendChild(clonedNode);
  });
};

const init = async () => {
  users = await getUsers();
  generateCards(users);
};

searchBar.onkeyup = (e) => {
  console.log("fired");
  cardList.innerHTML = "";
  let searchField = e.target.value;
  console.log(e.target.value);
  let newUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchField.toLowerCase()),
  );
  console.log(newUsers);
  generateCards(newUsers);
};

init();

//generate cards based on the number of users

//filter cards based on the search bar
