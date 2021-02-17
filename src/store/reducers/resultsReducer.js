import * as actionTypes from "../actions/actionTypes";

const initialState = {
    results: [],
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            const updatedResult = action.result * 1.5555; // data transformation in reducer
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: updatedResult,
                }),
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(
                (result) => result.id !== action.resultId
            );
            return {
                ...state,
                results: updatedArray,
            };
        default:
            return state;
    }
};

export default resultsReducer;
