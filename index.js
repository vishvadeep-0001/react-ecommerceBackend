const express = require("express");
const server = express();
const mongoose = require("mongoose");
const { createProduct } = require("./controller/ProductController");

// Middlewares
server.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/react-ecommerce");
  console.log("Databse connected");
}
 
server.get("/", (req, res) => {
  res.json({ status: "Success" });
});

server.post("/products", createProduct);

const port = 8080;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
