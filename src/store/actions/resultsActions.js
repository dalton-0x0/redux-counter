import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
    // don't do data transformation in the action creator, better at the reducer
    // const updatedResult = result * 1.5555;
    return {
        type: actionTypes.STORE_RESULT,
        result,
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().counterRoot.counter; // not advisable to put too much logic here
            console.log("oldCounter", oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId,
    };
};
