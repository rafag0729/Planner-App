import moment from "moment";
import { formattingDate } from "../../helpers/helperFunctions";
import { types } from "../type/types";

const initialState = {
    activitySelected: null,
    daySelected: {
        day: "",
        hour: "",
        min: ""
    }
}

export const selectedReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.settingDaySelected:
            return {
                ...state,
                daySelected: {
                    ...state.daySelected,
                    day: action.payload.day
                }
            }

        case types.settingHourMinSelected:
            return {
                ...state,
                daySelected: {
                    ...state.daySelected,
                    hour: action.payload.hour,
                    min: action.payload.min
                }
            }
        
        case types.settingActivitySelected:
            return {
                ...state,
                activitySelected: {
                    ...action.payload
                }
            }

        case types.removingActivitySelected:
            return {
                ...state,
                activitySelected: null
            }
        
        default:
            return state;
    }
}
