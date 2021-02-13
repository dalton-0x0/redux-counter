import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from "./store/reducers/counterReducer";
import resultsReducer from "./store/reducers/resultsReducer";

const rootReducer = combineReducers({
    counterRoot: counterReducer,
    resultsRoot: resultsReducer,
});

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("[Middleware]... Dispatching", action);
            const result = next(action);
            console.log("[Middleware]... Next State", store.getState());
            return result;
        };
    };
};

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
