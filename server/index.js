const express = require("express");
const cors = require("cors");
const productList = require("./products.json");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  res.json(productList);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const filteredProducts = productList.filter((item) => item.id == id);
  console.log(filteredProducts);
  res.json(filteredProducts);
});
const port = 3001;
app.listen(port, () => console.log("started"));
