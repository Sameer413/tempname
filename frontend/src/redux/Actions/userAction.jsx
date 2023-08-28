import axios from "axios";

export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post('/login', { email, password });
        dispatch({ type: 'loginSuccess', payload: data });

    } catch (error) {
        dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
}