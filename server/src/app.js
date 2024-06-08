const express = require("express");
const app = express();
const conn = require("../config/conn");
const bodyParser = require("body-parser");
const customerRoute = require("../routes/route");
const PORT = 5000;
const cors = require("cors");


// connection With mongoDB
conn();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api/customer", customerRoute)


app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})