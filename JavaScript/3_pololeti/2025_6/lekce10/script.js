let gift = document.getElementById("add_input");
let add_start = document.getElementById("add_start");
let add_end = document.getElementById("add_end");
let delete_start = document.getElementById("delete_start");
let delete_end = document.getElementById("delete_end");
let website_calendar = document.getElementById("list");

let calendar = [];

function update_list() {
  website_calendar.innerHTML = "";
  for (const element of calendar) {
    website_calendar.innerHTML += `<li> ${element} </li>`; // "" '' ``
  }
}

add_start.addEventListener("click", () => {
  calendar.unshift(gift.value);
  update_list();
});

add_end.addEventListener("click", () => {
  calendar.push(gift.value);
  update_list();
});

delete_start.addEventListener("click", () => {
  calendar.shift(gift.value);
  update_list();
});

delete_end.addEventListener("click", () => {
  calendar.pop(gift.value);
  update_list();
});
