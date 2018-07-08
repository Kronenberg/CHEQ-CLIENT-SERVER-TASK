import { 
    GET_VAST_PENDING,
    GET_VAST_SUCCESS,
    GET_VAST_REJECTED,
    GET_VAST_TO_INITIAL
 } from '../ActionTYPES/TYPES';

const initialVasttate = {
    pending: false,
    success: false,
    rejected: false,
    response: null,
    selectedItem: null
}

function vastReducer(state = initialVasttate, action) {
		switch(action.type) {
            case GET_VAST_PENDING: 
                return {
                    ...state,
                    pending: true
                }

            case GET_VAST_SUCCESS:
                return {
                    ...state,
                    success: true,
                    pending: false,
                    response: action.payload
                } 

                case GET_VAST_REJECTED:
                return {
                    ...state,
                    success: false,
                    pending: false,
                    rejected: true,
                    response: action.payload
                } 

            case GET_VAST_TO_INITIAL:
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

export default vastReducer;