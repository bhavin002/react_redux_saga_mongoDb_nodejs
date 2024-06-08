const Customer = require("../model/customer");

const getAllCustomer = async (req, res) => {
    try {
        const customers = await Customer.find({});
        if (customers) {
            res.status(200).json({
                success: true,
                message: "Customer Fetched successfully",
                data: customers
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const addCustomer = async (req, res) => {
    const { fname, lname, email, pnumber, nickName } = req.body;

    try {
        if (!fname || !lname || !email || !pnumber || !nickName) {
            res.status(422).json({
                success: false,
                message: "Please provide all required fields"
            })
        } else {
            const newCustomer = new Customer({
                fname,
                lname,
                email,
                pnumber,
                nickName
            })
            const saveCustomer = await newCustomer.save();
            if (saveCustomer) {
                res.status(201).json({
                    success: true,
                    message: "Customer created successfully",
                    data: saveCustomer
                })
            }
        }

    } catch (error) {
        console.log(error);
    }
}

const getOneCustomer = async (req, res) => {
    const id = req.params['id'];
    try {
        const customer = await Customer.findOne({ _id: id });
        if (customer) {
            res.status(200).json({
                success: true,
                message: "Customer Fetched successfully",
                data: customer
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const updateCustomer = async (req, res) => {
    const id = req.params['id'];
    const { fname, lname, email, pnumber, nickName } = req.body;

    try {
        if (!fname || !lname || !email || !pnumber || !nickName) {
            res.status(422).json({
                success: false,
                message: "Please provide all required fields"
            })
        } else {
            const updateCustomer = await Customer.findByIdAndUpdate({ _id: id }, { $set: { fname, lname, email, pnumber, nickName } }, { new: true })
            if (updateCustomer) {
                res.status(200).json({
                    success: true,
                    message: "Customer Updated successfully",
                    data: updateCustomer
                })
            }
        }

    } catch (error) {
        console.log(error);
    }
}

const deleteCustomer = async (req, res) => {
    const id = req.params['id'];
    try {
        const deleteCustomer = await Customer.findByIdAndRemove({ _id: id });
        if (deleteCustomer) {
            res.status(200).json({
                success: true,
                message: "Customer Fetched successfully",
                data: deleteCustomer
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllCustomer, addCustomer, getOneCustomer, updateCustomer, deleteCustomer };