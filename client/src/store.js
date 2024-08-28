import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk }from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from "./Components/redux/reducers/main"; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;