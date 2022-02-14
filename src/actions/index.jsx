import axios from 'axios';
import { Dispatch } from 'redux';

export const fetchData = (url) => async (dispatch) => {
    try {
        const res = await axios.get(``);
        const data = res.data;

    } catch(err) {

    }
}