import { request, error, received } from "../shared/redux/baseActions";
import { FETCH_MODEL_REQUEST, FETCH_MODEL_SUCCESS, FETCH_MODEL_ERROR } from "./actionTypes";
import Axios from "axios";

export const getCategory = () => dispatch => {
    // Dispacha uma requisição
    dispatch(request(FETCH_MODEL_REQUEST))

    const axiosConfig = {
        method: 'GET',
        url: 'https://api.coinmarketcap.com/v1/ticker/',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    return Axios(axiosConfig)
        .then(response => { 
            dispatch(received(FETCH_MODEL_SUCCESS, response.data)) })
        .catch(err => {
            console.log('AXIOS ERROR:', err);
            dispatch(error(FETCH_MODEL_ERROR))
        })
}