const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var dbconnection = require("./db");

const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(bodyParser.json());

app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

const port = 8000;

app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));
