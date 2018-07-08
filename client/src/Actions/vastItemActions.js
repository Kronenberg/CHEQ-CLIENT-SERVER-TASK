import {
    GET_VAST_BY_ID_PENDING,
    GET_VAST_BY_ID_SUCCESS,
    GET_VAST_BY_ID_REJECTED,
    GET_VAST_BY_ID_TO_INITIAL
   } from '../ActionTYPES/TYPES'
   
   import { config } from './apiEndpoints';
   
   import axios from 'axios';

   // @locationName: string
  export const getVastById = (id) =>
  (dispatch, getState) => {
   
    dispatch({ type: GET_VAST_BY_ID_PENDING });

    axios.get(`${config.HOST}/fetch_vast/${id}`)
        .then((response) => {
            dispatch({ type: GET_VAST_BY_ID_SUCCESS, payload: response });
    })
        .catch((error) => {
            dispatch({ type: GET_VAST_BY_ID_REJECTED, payload: error });
    });
}

export const getVastByIdToInitial = () => {
    return {
        type: GET_VAST_BY_ID_TO_INITIAL
    }
}

export default {
    getVastById,
    getVastByIdToInitial
}