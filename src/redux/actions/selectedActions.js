import { types } from "../type/types";

export const settingDaySelected = (day) => ({
        type: types.settingDaySelected,
        payload: {
            day,
        }
    }
)

export const settingHourMinSelected = (hour, min) => ({
        type: types.settingHourMinSelected,
        payload: {
            hour,
            min
        }
    }
)

export const settingActivitySelected = (activity) => ({
    type: types.settingActivitySelected,
    payload: activity
})

export const removingActivitySelected = () => ({
    type: types.removingActivitySelected
})