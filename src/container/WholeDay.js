import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';

import { Hours } from '../components/wholeDay/Hours';
import { hideDayModal } from '../redux/actions/uiActions';

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
                <svg className="close_icon" width="24" height="24">
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                </svg>
                {/* <img
                    className="icon"
                    onClick={ closeDayModal }
                    src={ closeIcon } 
                    alt="Close"/> */}
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