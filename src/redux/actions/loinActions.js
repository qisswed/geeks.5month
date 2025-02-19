export const FETCH_LIONS_REQUEST = "FETCH_LIONS_REQUEST";
export const FETCH_LIONS_SUCCESS = "FETCH_LIONS_SUCCESS";
export const FETCH_LIONS_FAILURE = "FETCH_LIONS_FAILURE";

export const fetchLions = () => async (dispatch) => {
    dispatch({ type: FETCH_LIONS_REQUEST });
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12&category_ids=5");
        const data = await response.json();
        dispatch({ type: FETCH_LIONS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_LIONS_FAILURE, payload: error.message });
    }
};