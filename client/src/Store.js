import { combineReducers, createStore, applyMiddleware } from "redux";
import custReducer from "./redux/reducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./redux/sagaMiddleware";
import { composeWithDevTools } from "redux-devtools-extension"

const sagaMiddleware = createSagaMiddleware();

const allReducer = combineReducers({
    customers: custReducer
})
const store = createStore(allReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
