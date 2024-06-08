import { call, put, takeEvery } from "redux-saga/effects"
import axios from "axios";
import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE } from "./actionTypes";
import {FETCH_CUSTOMERS_ENDPOINT,ADD_CUSTOMER_ENDPOINT,FETCH_CUSTOMER_ENDPOINT,UPDATE_CUSTOMER_ENDPOINT,DELETE_CUSTOMER_ENDPOINT} from "./api"


function* fetchCustomersSaga() {
    try {
        const response = yield call(axios.get, FETCH_CUSTOMERS_ENDPOINT);
        const customers = response.data;
        yield put({ type: FETCH_CUSTOMERS_SUCCESS, payload: customers });
    } catch (error) {
        yield put({ type: FETCH_CUSTOMERS_FAILURE, error });
    }
}

function* addCustomerSaga(action) {
    try {
        const response = yield call(axios.post, ADD_CUSTOMER_ENDPOINT, action.payload);
        const addedCustomer = response.data;
        yield put({ type: ADD_CUSTOMER_SUCCESS, payload: addedCustomer });
    } catch (error) {
        yield put({ type: ADD_CUSTOMER_FAILURE, error });
    }
}

function* fetchCustomerSaga(action) {
    try {
        const response = yield call(axios.get, `${FETCH_CUSTOMER_ENDPOINT}/${action.payload}`);
        const customer = response.data;
        yield put({ type: FETCH_CUSTOMER_SUCCESS, payload: customer });
    } catch (error) {
        yield put({ type: FETCH_CUSTOMER_FAILURE, error });
    }
}


function* updateCustomerSaga(action) {
    try {
        const response = yield call(axios.post, `${UPDATE_CUSTOMER_ENDPOINT}/${action.payload.id}`, action.payload.customer);
        const updateCustomer = response.data;
        yield put({ type: UPDATE_CUSTOMER_SUCCESS, payload: updateCustomer });
    } catch (error) {
        yield put({ type: UPDATE_CUSTOMER_FAILURE, error });
    }
}

function* removeCustomerSaga(action) {
    try {
        const response = yield call(axios.get, `${DELETE_CUSTOMER_ENDPOINT}/${action.payload}`);
        const customer = response.data;
        yield put({ type: DELETE_CUSTOMER_SUCCESS, payload: customer });
    } catch (error) {
        yield put({ type: DELETE_CUSTOMER_FAILURE, error });
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_CUSTOMERS_REQUEST, fetchCustomersSaga);
    yield takeEvery(ADD_CUSTOMER_REQUEST, addCustomerSaga);
    yield takeEvery(FETCH_CUSTOMER_REQUEST, fetchCustomerSaga);
    yield takeEvery(UPDATE_CUSTOMER_REQUEST, updateCustomerSaga);
    yield takeEvery(DELETE_CUSTOMER_REQUEST, removeCustomerSaga);
}

export default rootSaga;