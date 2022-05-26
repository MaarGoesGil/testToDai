import axios from 'axios';
import { SET_MAP_VISIBLE } from "../actionsType/actionType.js"

export function showCoordinates() {
    return async (dispatch) => {
        const response = await axios.get('http://172.30.15.5:3015/api/mapadb');
        dispatch({ type: SET_MAP_VISIBLE, payload: response.data })
    }
}
