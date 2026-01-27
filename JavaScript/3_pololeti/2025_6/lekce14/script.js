// fetch automaticky dela GET request
// jakoby:
// fetch("url", {
//   method: "GET"
// })
fetch("https://696fbf73a06046ce6187befc.mockapi.io/products/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        // formatovany string: pouzit `` (pozor!! ne '' ani "")!! a v nich ${nazev_promenne}
        console.log(`Objekt ma klic: ${key} s hodnotou: ${element}`);
        // nemusime psat toto:
        // console.log("Objekt ma klic: " + key + " s hodnotou: " + element);
      }
    }
  })
  .catch((error) => {
    console.error(error);
  });

function deleteUser(id) {
  fetch(`https://696fbf73a06046ce6187befc.mockapi.io/users/${id}`, {
    method: "DELETE",
  });
}
