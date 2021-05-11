import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { gettingDateFormat, settingTime } from '../helpers/helperFunctions';

export const DayFromWeek = ({date, dispatchingDayModal}) => {

    /* Redux */
    const activities = useSelector(state => state.activities)

    /* Helper functions */
    const { dayName, dayNumber, month } = gettingDateFormat(date);
    const hoursFromDay = settingTime(date);

    return (
        <div
            onClick={ () => dispatchingDayModal(date) } 
            className="dayFromWeek">
                <h4>{`${dayName} ${dayNumber} de ${month}`}</h4>
                
                {
                    hoursFromDay.map((hour, i) => (
                            <div
                                key={i}>
                                    {hour.get('hour')}
                                    
                                    <div>
                                    {
                                        activities.map(({startTime, day, project }, i) => {
                                            if(moment(hour).isSame(`${day} ${startTime}`, 'hour')){
                                                return (
                                                    <span 
                                                        className="ActivityOfDayWeek"
                                                        key={i}>
                                                        { project.slice(0,3) }
                                                    </span>
                                                )
                                            }
                                        })
                                    }
                                    </div>
                            </div>
                        )
                    )
                }
        </div>
    )
}
