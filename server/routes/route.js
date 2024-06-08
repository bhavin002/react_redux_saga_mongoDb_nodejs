const express = require("express");
const { getAllCustomer, addCustomer,getOneCustomer, updateCustomer, deleteCustomer } = require("../controller/customer");
const route = express.Router();

route.get("/getAllCustomer", getAllCustomer);
route.post("/addCustomer", addCustomer);
route.get("/getOneCustomer/:id", getOneCustomer);
route.post("/updateCustomer/:id", updateCustomer);
route.get("/deleteCustomer/:id", deleteCustomer);

module.exports = route;