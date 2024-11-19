import axios from "axios";

export const fetchCharacters = () => async (dispatch) => {
    dispatch({ type: "FETCH_CHARACTERS_REQUEST" });
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        dispatch({
            type: "FETCH_CHARACTERS_SUCCESS",
            payload: response.data.results,
        });
    } catch (error) {
        dispatch({ type: "FETCH_CHARACTERS_FAILURE", error: error.message });
    }
};
