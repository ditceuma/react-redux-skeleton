import { FETCH_MODEL_SUCCESS } from "../actions/actionTypes";
import { getNewState } from "../shared/utils/frontend";

const INITIALSTATE = {
    results:[]
}

const categoryReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case FETCH_MODEL_SUCCESS: 
            const { payload: results } = action
            
            return getNewState(state, {
                results
            })
            
    
        default:
            return state
    }
}
export default categoryReducer