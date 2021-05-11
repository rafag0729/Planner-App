import { types } from "../type/types";

const initialState = {
    modalDayDetail: false,
    modalAddEdit: false,
    modalAlertMessage: {
        error: false,
        message: null
    }
}

export const uiReducer = ( state = initialState, action ) => {
    
    switch (action.type) {
        case types.showDayModal:
            return {
                ...state,
                modalDayDetail: true
            }
        
        case types.hideDayModal:
            return {
                ...state,
                modalDayDetail: false
            }
        
        case types.showAddEditModal:
            return {
                ...state,
                modalAddEdit: true
            }
        
        case types.hideAddEditModal:
            return {
                ...state,
                modalAddEdit: false
            }     
                   
        default:
            return state;
    }
}
