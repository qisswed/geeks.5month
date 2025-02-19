const initialState = {
    lions: [],
    loading: false,
    error: null,
};

const lionReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_LIONS_REQUEST":
            return { ...state, loading: true };
        case "FETCH_LIONS_SUCCESS":
            return { ...state, loading: false, lions: action.payload };
        case "FETCH_LIONS_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default lionReducer;
