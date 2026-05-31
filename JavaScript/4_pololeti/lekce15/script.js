let table = document.querySelector("table");

function generate_table(rows, cols) {
  for (let row_number = 0; row_number < rows; row_number++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (let col_number = 0; col_number < cols; col_number++) {
      let col, num;
      if (col_number == 0 || row_number == 0) {
        col = document.createElement("th");
        num = col_number > row_number ? col_number : row_number;
      } else {
        col = document.createElement("td");
        num = row_number * col_number;
      }
      col.innerHTML = num;
      row.appendChild(col);
    }
  }
}

table.innerHTML = "";
table_top = document.createElement("tr");
secret_tunnel = document.createElement("th");
table.appendChild(table_top);
table_top.appendChild(secret_tunnel);
