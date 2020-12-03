import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = applyMiddleware(sagaMiddleware);

/**
 * We could use combineReducers and create "rootReducer" if we wanted to segment
 * our state and separate it between entities.
 */

const store = createStore(reducer, composeWithDevTools(middleWares));
sagaMiddleware.run(rootSaga);

export default store;
