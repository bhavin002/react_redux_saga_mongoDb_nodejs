import { FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILURE, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE } from "./actionTypes";

const initialState = {
    customers: [],
    customer: null,
    error: null,
};

const custReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.payload,
                error: null,
            };
        case FETCH_CUSTOMERS_FAILURE:
            return {
                ...state,
                customers: [],
                error: action.error,
            };
        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                customers: [...state.customers, action.payload],
                error: null,
            };
        case ADD_CUSTOMER_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
                error: null,
            };
        case FETCH_CUSTOMER_FAILURE:
            return {
                ...state,
                customer: null,
                error: action.error,
            };
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
                error: null,
            };
        case UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                customer: null,
                error: action.error,
            };
        case DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
                error: null,
            };
        case DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                customer: null,
                error: action.error,
            };
        default:
            return state;
    }
}

export default custReducer;