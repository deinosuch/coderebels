let data = document.querySelectorAll("td");

function createGrades() {
  data.forEach((element) => {
    element.innerHTML = Math.round((Math.random() * 4 + 1) * 10) / 10;
  });
}

createGrades();
