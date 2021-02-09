const redux = require("redux");
const createStore = redux.createStore;

// State ==> should be initialized before the reducer if not getState will return 'undefined'
const initialState = {
    counter: 0,
};

// Reducer ==> connected to the store, the only thing that can update state, pure function
const rootReducer = (state = initialState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value,
        };
    }
    return state; // return old state if no action is called
};

// Store ==> object that contains the state of the app
const store = createStore(rootReducer);
console.log("[Initial]", store.getState());

// Subscription ==> its argument is a function that's executed whenever the state is updated by an action dispatched to the store via the reducer
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
});

// Dispatching Action ==> dispatches to the store with optional payload {} (in this case we're just passing a 'value' key)
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log("[Actions]", store.getState());
