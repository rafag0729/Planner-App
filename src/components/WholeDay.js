import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import { Hours } from './Hours';
import { hideDayModal } from './../redux/actions/uiActions';

import { gettingDateFormat, settingTime } from '../helpers/helperFunctions';
import closeIcon from './../assets/close.svg'
import { AddEditActivity } from './AddEditActivity';
import moment from 'moment';

export const WholeDay = ({day}) => {

    /* Redux info */
    const dispatch = useDispatch();
    const { ui, activities, selected } = useSelector(state => state);
    const { modalAddEdit } = ui;
    const { activitySelected } = selected;

    /* State */
    const [activitiesOfDay, setActivitiesOfDay] = useState([]);

    useEffect(() => {
        
        const activitiesFound = activities.filter( (activity) => moment(activity.day).isSame(day, 'day') );
        setActivitiesOfDay( activitiesFound )
        
    }, [day, activities])

    /* Helpers functions */
    const { dayName, dayNumber, month } = gettingDateFormat(day, true);
    const hoursFromDay = settingTime(day, true);

    /* Component functions */
    const closeDayModal = () => {
        dispatch( hideDayModal() );
    }

    return (
        <div
            onMouseLeave={ closeDayModal } 
            className="wholeDay">
            <h3>{`${dayName} ${dayNumber} de ${month}`}</h3>
            <span>
                <img
                    className="icon"
                    onClick={ closeDayModal }
                    src={ closeIcon } 
                    alt="Close"/>
            </span>

            <div className="hoursInfo">
                {
                    hoursFromDay.map((hour, i) => (
                        <Hours
                            activitiesOfDay={ activitiesOfDay } 
                            key={ i }
                            day={ day }
                            hour={ hour } />
                    ))
                }
            </div>

            <CSSTransition 
                in={ modalAddEdit }
                timeout={500}
                unmountOnExit
                classNames="addEditTransition">
                    <div>
                        <AddEditActivity activitySelected={activitySelected} />
                    </div>
            </CSSTransition>
        </div>
    )
}