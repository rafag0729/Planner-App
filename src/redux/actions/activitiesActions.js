import { types } from '../type/types';
import { db } from './../../firebase-config';
import { hideAddEditActivities } from './uiActions';

export const startFirstLoadingActivities = () => {

    return async(dispatch) => {
        const activitiesSnap = await db.collection('/activities').get();
        const activities = [];
    
        activitiesSnap.forEach((snapChild) => {
            activities.push({
                ...snapChild.data(),
                id: snapChild.id,
            });
        })

        dispatch( firstActivitiesLoad(activities))
    }
}

export const startAddingActivity = (activity, day) => {

    return (dispatch) => {

        db.collection('activities').add({ ...activity, day})
            .then(({id}) => {
                dispatch( activityAdded({...activity, day, id}))
            });

        dispatch(hideAddEditActivities());
    }
}

export const startUpdatingActivity = (activityToUpdate, activityId) => {
    
    return async(dispatch) => {

        const activityToFireStore = { ...activityToUpdate };
        delete activityToFireStore.id;
        
        await db.doc(`/activities/${activityId}`).update(activityToFireStore)
            .then(() => dispatch( activityUpdated( activityToUpdate )))
            .catch(err => console.log(err))
    }

}

export const startDeletingActivity = (id) => {

    return (dispatch) => {
        db.doc(`/activities/${id}`).delete()
            .then(() => dispatch( activityDeleted(id) ))
            .catch((err) => console.log('Error deleting from Firestore: ',err))
    }
}

const firstActivitiesLoad = (activities) => ({
    type: types.firstActivitiesLoad,
    payload: activities
})

const activityAdded = (activity) => ({ 
    type: types.addingActivity,
    payload: {
        ...activity
    }
})

const activityUpdated = (activity) => ({
    type: types.updatingActivitiy,
    payload: activity
})

const activityDeleted = (id) => ({
    type: types.deletingActivity,
    payload: id
})