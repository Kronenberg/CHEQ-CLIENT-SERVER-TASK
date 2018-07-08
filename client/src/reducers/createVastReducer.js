import { 
    CREATE_VAST_PENDING,
    CREATE_VAST_SUCCESS,
    CREATE_VAST_REJECTED,
    CREATE_VAST_TO_INITIAL
 } from '../ActionTYPES/TYPES';

const initialVast = {
    pending: false,
    success: false,
    rejected: false,
    response: null,
}

function createVast(state = initialVast, action) {
		switch(action.type) {
            case CREATE_VAST_PENDING: 
                return {
                    ...state,
                    pending: true
                }
            case CREATE_VAST_SUCCESS:
                return {
                    ...state,
                    success: true,
                    pending: false,
                    rejected: false,
                    response: action.payload
                } 

            case CREATE_VAST_REJECTED:
                return {
                    ...state,
                    success: false,
                    pending: false,
                    rejected: true,
                    response: action.payload
                } 
            case CREATE_VAST_TO_INITIAL:
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

export default createVast;