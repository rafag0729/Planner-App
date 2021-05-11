
import { types } from "../type/types";

const initialState = [];

export const activitiesReducer = ( state = initialState, action) => {
    
    switch (action.type) {

        case types.firstActivitiesLoad:
            return action.payload;

        case types.addingActivity:
            return [
                ...state, 
                { ...action.payload }
            ]
        
        case types.updatingActivitiy:
            return state.map((activity) => (activity.id === action.payload.id) ? {...activity, ...action.payload } : { ...activity });
        
        case types.deletingActivity:
            return state.filter((activity) => activity.id !== action.payload)
        
        default:
            return state;
    }
}
