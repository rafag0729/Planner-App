import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { gettingDateFormat, settingTime } from '../../helpers/helperFunctions';
import { ColorContext } from '../../context/ColorContext';

export const DayFromWeek = ({date, dispatchingDayModal}) => {

    /* Redux */
    const activities = useSelector(state => state.activities)

    /* Context */
    const { color } = useContext(ColorContext);
    
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
                                        activities.map(({startTime, endTime, day, project }, i) => {
                                            if(moment(hour).isSame(`${day} ${startTime}`, 'hour')){
                                                return (
                                                    <span
                                                        style={ { backgroundColor: color.find(({name, color}) => (name === project) && color).color }}
                                                        className="ActivityOfDayWeek"
                                                        key={i}>
                                                    </span>
                                                )
                                            }
                                            if(moment(hour).isBetween(`${day} ${startTime}`, `${day} ${endTime}`, 'minute')){
                                                return (
                                                    <span
                                                        style={ { backgroundColor: color.find(({name, color}) => (name === project) && color).color }}
                                                        className="ActivityOfDayWeek"
                                                        key={i}>
                                                    </span>
                                                )
                                            }
                                            if(moment(hour).isSame(`${day} ${endTime}`, 'hour')){
                                                return (
                                                    <span
                                                        style={ { backgroundColor: color.find(({name, color}) => (name === project) && color).color }}
                                                        className="ActivityOfDayWeek"
                                                        key={i}>
                                                    </span>
                                                )
                                            }
                                            else {
                                                return ""
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
