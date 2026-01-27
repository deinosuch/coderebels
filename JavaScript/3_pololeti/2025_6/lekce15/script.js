let new_product = {
  createdAt: 2090,
  name: "Chleba",
  amount: 14,
  price: 50,
  id: "78",
};

fetch("https://696fbf73a06046ce6187befc.mockapi.io/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(new_product),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
