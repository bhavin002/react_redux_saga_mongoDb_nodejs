const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "First name is mandatory"]
    },
    lname: {
        type: String,
        required: [true, "Last name is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Email name is mandatory"]
    },
    pnumber: {
        type: String,
        required: [true, "Phone number is mandatory"]
    },
    nickName: {
        type: String,
        required: [true, "Nick name is mandatory"]
    }
}, {
    timestamps: true
})

const Customer = new mongoose.model("customer", customerSchema);
module.exports = Customer;