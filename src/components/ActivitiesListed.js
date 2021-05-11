import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { showAddEditActivities } from '../redux/actions/uiActions';
import { AddEditActivity } from './AddEditActivity';
import { settingActivitySelected } from '../redux/actions/selectedActions';

export const ActivitiesListed = ({ activity, formattedDay, formattedHour, formattedMin }) => {

    /* Redux */
    const dispatch = useDispatch();

    /* Props */
    const {day, startTime, endTime, project, projectType} = activity;
    
    /* Helper functions */
    const current = moment(`${formattedDay}T${formattedHour}:${formattedMin}`);
    const startActivity = moment(day+"T"+startTime);
    const endActivity = moment(day+"T"+endTime);

    /* Component functions */
    const handleClick = () => {
        dispatch( showAddEditActivities() );
        dispatch( settingActivitySelected(activity) );
    }

    const activityResult = (project, projectType) => (
        <span
            onClick={ handleClick }
            className="activitiesListed">
                <b> {project} </b> {projectType}
        </span>
    )
    
    /* Render */
    if((moment(current).isBetween(startActivity, endActivity, 'minute'))){
        return (activityResult(project, projectType))
    }

    if((moment(current).isSame(startActivity, 'minute'))){
        return (activityResult(project, projectType))
    }

    if((moment(current).isSame(endActivity, 'minute'))){
        return (activityResult(project, projectType))
    }else {
        return "";
    }
}

