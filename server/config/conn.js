const mongoose = require("mongoose");

const conn = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/redux", {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log("connection successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = conn;