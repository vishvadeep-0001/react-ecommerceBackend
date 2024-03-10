const express = require("express");
const server = express();
const mongoose = require("mongoose");
const ProductRoute = require("./routes/ProductRoute");
const BrandRoute = require("./routes/BrandRoute");
const CategoryRoute = require("./routes/CategoryRoute");
const UserRoute = require("./routes/UserRoute");
const AuthRoute = require("./routes/AuthRoute");
const CartRoute = require("./routes/CartRoute");
const cors = require("cors");

// Middlewares
server.use(cors());
server.use(express.json());

// All Routes
server.use("/products", ProductRoute.router);
server.use("/brands", BrandRoute.router);
server.use("/category", CategoryRoute.router);
server.use("/users", UserRoute.router);
server.use("/auth", AuthRoute.router);
server.use("/cart", CartRoute.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/react-ecommerce");
  console.log("Databse connected");
}

server.get("/", (req, res) => {
  res.json({ status: "Success" });
});

const port = 8080;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
