async function get_users() {
  let response = await fetch(
    "https://698b6e946c6f9ebe57bcaac0.mockapi.io/user",
  );
  let data = await response.json();
  console.log(data);
}
