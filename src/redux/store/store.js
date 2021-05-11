import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { activitiesReducer } from '../reducers/activitiesReducer';
import { selectedReducer } from '../reducers/selectedReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui: uiReducer,
    selected: selectedReducer,
    activities: activitiesReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);