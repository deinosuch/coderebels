const UKOLY_DB_LINK = "https://698b6e946c6f9ebe57bcaac0.mockapi.io/Ukol";

let hotove_ukoly = document.getElementById("completed");
let celkem_ukoly = document.getElementById("total");

let num_hotove_ukoly = 0;
let num_celkem_ukoly = 0;

load_task_numbers();

let task_name_input = document.getElementById("task-to-add");
let add_task_button = document.querySelector(".button");

let task_container = document.querySelector(".container");

function load_task_numbers() {
  hotove_ukoly.innerHTML = num_hotove_ukoly;
  celkem_ukoly.innerHTML = num_celkem_ukoly;
}

function checkbox_implementation(novy_ukol, task_obj) {
  let checkbox = novy_ukol.querySelector("input");
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      // zaklikavame ze je hotovy
      task_obj["hotovy"] = true;
      num_hotove_ukoly += 1;
    } else {
      // odklikavame
      task_obj["hotovy"] = false;
      num_hotove_ukoly -= 1;
    }

    fetch(`${UKOLY_DB_LINK}/${task_obj["id"]}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task_obj),
    });

    load_task_numbers();
  });
}

function delete_implementation(novy_ukol, id) {
  let delete_button = novy_ukol.querySelector("i");
  delete_button.addEventListener("click", () => {
    if (confirm("Opravdu chces smazat tento ukol?")) {
      fetch(`${UKOLY_DB_LINK}/${id}`, {
        method: "DELETE",
      });

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

async function pridat_ukol(task_obj, existing) {
  let novy_ukol = document.querySelector(".task-template").cloneNode(true);
  novy_ukol.querySelector("p").innerHTML = task_obj["ukol"];
  novy_ukol.classList.remove("task-template");
  task_container.appendChild(novy_ukol);
  num_celkem_ukoly++;

  if (!existing) {
    console.log(task_obj);

    let response = await fetch(UKOLY_DB_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task_obj),
    });

    task_obj = await response.json();

    console.log(task_obj);
  } else if (task_obj["hotovy"]) {
    // Pokud ukol existuje v databazi a zaroven je tam ulozeny jako splneny, tak zaskrntout checkbox

    let checkbox = novy_ukol.querySelector("input");
    checkbox.checked = true;
    num_hotove_ukoly++;
  }

  load_task_numbers();
  checkbox_implementation(novy_ukol, task_obj);
  delete_implementation(novy_ukol, task_obj["id"]);
}

function pridat_novy_ukol() {
  let task_obj = {
    ukol: task_name_input.value,
    hotovy: false,
  };
  pridat_ukol(task_obj, false);
  task_name_input.value = "";
}

add_task_button.addEventListener("click", pridat_novy_ukol);

task_name_input.onkeyup = (e) => {
  if (e.keyCode == 13) {
    // 13 je kod klavesy ENTER
    pridat_novy_ukol();
  }
};

async function nacti_tasks() {
  let response = await fetch(UKOLY_DB_LINK);
  let tasks = await response.json();

  for (let task of tasks) {
    pridat_ukol(task, true);
  }
}

nacti_tasks();

document.getElementById("delete_all").addEventListener("click", () => {
  location.reload();
});
