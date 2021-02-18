import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
    // move data transformation to reducer
    // const updatedResult = result * 1.5555;
    return {
        type: actionTypes.STORE_RESULT,
        // result: updatedResult,
        result,
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().counterRoot.counter; 
            console.log("oldCounter", oldCounter); // showing use case of getState()
            dispatch(saveResult(result));
        }, 500);
    };
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId,
    };
};
