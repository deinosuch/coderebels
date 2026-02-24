// fetch("url", objekt s informacemi o nasem requestu)
// objekt s informacemi o requestu:
// {
//   method: "jaky chceme typ requestu",
//   headers: "objekt s informacemi o tom co posilame za informace"
//          napr:
//          {
//            "Content-Type" : "application/json"
//          }
//   body: co chceme poslat
// }
//
// ukol na procviceni:
// pridat 3 users (s vasemi informacemi)

// let jmeno = "Josef";
//
// fetch("https://696fbf73a06046ce6187befc.mockapi.io/users/4", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     createdAt: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

let promise = fetch("https://696fbf73a06046ce6187befc.mockapi.io/users");
console.log(promise);

// Druha moznost jak pracovat s fetchem
// async / await funkce
async function load_users() {
  let response = await fetch(
    "https://696fbf73a06046ce6187befc.mockapi.io/users",
  );
  console.log(response);

  console.log(await response.json()); // Az tady ziskame data
}

load_users();
