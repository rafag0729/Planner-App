import { types } from "../type/types"

export const showDayModal = () => ({
        type: types.showDayModal
    })

export const hideDayModal = () => ({
    type: types.hideDayModal
})

export const showAddEditActivities = () => ({
    type: types.showAddEditModal
})

export const hideAddEditActivities = () => ({
    type: types.hideAddEditModal
})