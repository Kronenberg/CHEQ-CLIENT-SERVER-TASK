import {
 GET_VAST_PENDING,
 GET_VAST_SUCCESS,
 GET_VAST_REJECTED,
 GET_VAST_TO_INITIAL,
 CREATE_VAST_PENDING,
 CREATE_VAST_SUCCESS,
 CREATE_VAST_REJECTED,
} from '../ActionTYPES/TYPES'


import { config } from './apiEndpoints';

import axios from 'axios';


export const getAllVasts = () =>
(dispatch, getState) => {
 
  dispatch({ type: GET_VAST_PENDING });

  axios.get(`${config.HOST}/fetch_all_vasts`)
      .then((response) => {
          dispatch({ type: GET_VAST_SUCCESS, payload: response });
  })
      .catch((error) => {
          dispatch({ type: GET_VAST_REJECTED, payload: error });
  });
}

export function getVastToInitial() {
    return {
        type: GET_VAST_TO_INITIAL
    }
}


export const createVast = (vastObject) =>
(dispatch, getState) => {
 
  dispatch({ type: CREATE_VAST_PENDING });

  console.log(vastObject);

  axios.post(`${config.HOST}/create_vast`, {
    vast_url: vastObject.vast_url,
    position: vastObject.position || "bottom_left",
    hide_ui: vastObject.hide_ui || false
  })
  .then((response) => {
    dispatch({ type: CREATE_VAST_SUCCESS, payload: response });
    getAllVasts();
  })
  .catch((error) => {
    dispatch({ type: CREATE_VAST_REJECTED, payload: error });
  });

}

export default {
    getAllVasts,
    getVastToInitial,
    createVast
}


