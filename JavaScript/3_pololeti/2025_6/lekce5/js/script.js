let hotove_ukoly = document.getElementById("completed");
let celkem_ukoly = document.getElementById("total");

let num_hotove_ukoly = +localStorage.getItem("key_hotove_ukoly");
let num_celkem_ukoly = +localStorage.getItem("key_celkem_ukoly");

load_task_numbers();

let tasks = {};
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

let task_name_input = document.getElementById("task-to-add");
let add_task_button = document.querySelector(".button");

let task_container = document.querySelector(".container");

function load_task_numbers() {
  // funkce, ktera na stranku nacte momentalni pocet hotovych a celkem ukolu

  localStorage.setItem("key_hotove_ukoly", num_hotove_ukoly);
  localStorage.setItem("key_celkem_ukoly", num_celkem_ukoly);

  hotove_ukoly.innerHTML = num_hotove_ukoly;
  celkem_ukoly.innerHTML = num_celkem_ukoly;
}

function checkbox_implementation(novy_ukol) {
  let checkbox = novy_ukol.querySelector("input");
  let nazev = novy_ukol.querySelector("p").innerHTML;
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      tasks[nazev] = true;
      num_hotove_ukoly += 1;
    } else {
      tasks[nazev] = false;
      num_hotove_ukoly -= 1;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    load_task_numbers();
  });
}

function delete_implementation(novy_ukol) {
  let delete_button = novy_ukol.querySelector("i");
  delete_button.addEventListener("click", () => {
    if (confirm("Opravdu chces smazat tento ukol?")) {
      let nazev = novy_ukol.querySelector("p").innerHTML;
      delete tasks[nazev];
      localStorage.setItem("tasks", JSON.stringify(tasks));

      novy_ukol.remove();
      num_celkem_ukoly -= 1;

      // Pozor kdyz je ukol zaskrnuty
      let checkbox = novy_ukol.querySelector("input");
      if (checkbox.checked) {
        num_hotove_ukoly -= 1;
      }

      load_task_numbers();
    }
  });
}

function pridat_ukol(nazev, existing) {
  let novy_ukol = document.querySelector(".task-template").cloneNode(true);
  novy_ukol.querySelector("p").innerHTML = nazev;
  novy_ukol.classList.remove("task-template");
  task_container.appendChild(novy_ukol);

  if (!existing) {
    // Pokud nas ukol uz existuje v local storage tak ho tam znovu neukladat

    tasks[nazev] = false;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    num_celkem_ukoly += 1;
    load_task_numbers();
  } else if (tasks[nazev]) {
    // Pokud ukol existuje v local storage a zaroven je tam ulozeny jako splneny, tak zaskrntout checkbox

    let checkbox = novy_ukol.querySelector("input");
    checkbox.checked = true;
  }

  checkbox_implementation(novy_ukol);
  delete_implementation(novy_ukol);
}

add_task_button.addEventListener("click", () => {
  pridat_ukol(task_name_input.value, false);
  task_name_input.value = "";
});

task_name_input.onkeyup = (e) => {
  if (e.keyCode == 13) {
    // 13 je kod klavesy ENTER
    pridat_ukol(task_name_input.value, false);
    task_name_input.value = "";
  }
};

for (let task in tasks) {
  pridat_ukol(task, true);
}

document.getElementById("delete_all").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
