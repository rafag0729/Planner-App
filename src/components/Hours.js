import React from 'react'
import { settingMinutesFromHour } from '../helpers/helperFunctions';
import { Minutes } from './Minutes';

export const Hours = ({activitiesOfDay, day, hour, setActivitySelected}) => {

    const minutesFromHour = settingMinutesFromHour(hour, true);

    return (
        <>
        {
            minutesFromHour.map((min, i) => (
                <Minutes
                    activitiesOfDay={ activitiesOfDay }
                    day={day} 
                    hour={hour} 
                    min={min}
                    key={i}/>
            ))
        }
        </>
    )
}
