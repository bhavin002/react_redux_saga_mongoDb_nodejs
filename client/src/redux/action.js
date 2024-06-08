import { ADD_CUSTOMER_REQUEST, DELETE_CUSTOMER_REQUEST, FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMER_REQUEST, UPDATE_CUSTOMER_REQUEST } from "./actionTypes"

const fetchCustomers = () => {
    return {
        type: FETCH_CUSTOMERS_REQUEST
    }
}

const addCustomer = (customer) => {
    return {
        type: ADD_CUSTOMER_REQUEST,
        payload: customer
    }
}

const fetchCustomer = (id) => {
    return {
        type: FETCH_CUSTOMER_REQUEST,
        payload: id
    }
}

const updateCustomer = (id, customer) => {
    return {
        type: UPDATE_CUSTOMER_REQUEST,
        payload: {
            id,
            customer
        }
    }
}

const removeCustomer = (id) => {
    return {
        type: DELETE_CUSTOMER_REQUEST,
        payload: id
    }
}

export { fetchCustomers, addCustomer, fetchCustomer, updateCustomer, removeCustomer }