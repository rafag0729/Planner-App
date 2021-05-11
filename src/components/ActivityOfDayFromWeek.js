import moment from 'moment'
import React from 'react'

export const ActivityOfDayFromWeek = ({activitiesOfDay, hour}) => {

    activitiesOfDay.filter( ({ startTime, id, project }, i) => {
        if(hour.get('hour') == Number(startTime.slice(0, 2))){
            return (
                <span
                    key={id}>
                    {project}
                </span>
            )
        } else {
            return (
                <div key={i}></div>    
            );
        }
    })
    
    


    
   
}
