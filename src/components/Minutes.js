import moment from 'moment';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formattingDate, formattingHoursMinutes } from '../helpers/helperFunctions';
import { settingHourMinSelected } from '../redux/actions/selectedActions';

import { showAddEditActivities } from '../redux/actions/uiActions'
import { ActivitiesListed } from './ActivitiesListed';

export const Minutes = ({ activitiesOfDay, day, hour, min, setActivitySelected }) => {
    /* console.log('Day on minutesComp: ', day); */
    /* Redux */
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities);

    /* HelperFunctions */
    const formattedDay = formattingDate(moment(day));
    const { formattedHour, formattedMin } = formattingHoursMinutes(hour, min);

    /* Component functions */
    const dispatchingModal = () => {
        dispatch( settingHourMinSelected(formattedHour, formattedMin) );
        dispatch( showAddEditActivities() );
    }

    return (
        <div
            className="minutes"
            onClick={ dispatchingModal }>
            <span> {`${formattedHour}:${formattedMin}`} </span>
            
            {   
                activitiesOfDay.map((activity) => (
                    <ActivitiesListed
                        key={activity.id}
                        activity={activity}
                        formattedDay={ formattedDay }
                        formattedHour={ formattedHour }
                        formattedMin={ formattedMin }
                        />
                ))
            }
        </div>
    )
}
