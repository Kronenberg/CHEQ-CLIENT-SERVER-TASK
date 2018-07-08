import { 
    GET_VAST_BY_ID_PENDING,
    GET_VAST_BY_ID_SUCCESS,
    GET_VAST_BY_ID_REJECTED,
    GET_VAST_BY_ID_TO_INITIAL
 } from '../ActionTYPES/TYPES';

const initialVast = {
    pending: false,
    success: false,
    rejected: false,
    response: null,
}

function singleVastReducer(state = initialVast, action) {
		switch(action.type) {
            case GET_VAST_BY_ID_PENDING: 
                return {
                    ...state,
                    pending: true
                }
            case GET_VAST_BY_ID_SUCCESS:
                return {
                    ...state,
                    success: true,
                    pending: false,
                    rejected: false,
                    response: action.payload
                } 

            case GET_VAST_BY_ID_REJECTED:
                return {
                    ...state,
                    success: false,
                    pending: false,
                    rejected: true,
                    response: action.payload
                } 
            case GET_VAST_BY_ID_TO_INITIAL:
                return {
                    ...state,
                    pending: false,
                    success: false,
                    rejected: false,
                    response: null
                }                    
			default: 
				return state;
			
        }   
}

export default singleVastReducer;