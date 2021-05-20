import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideAddEditActivities } from '../redux/actions/uiActions';
import closeIcon from './../assets/close.svg';
import { startAddingActivity, startUpdatingActivity, startDeletingActivity } from '../redux/actions/activitiesActions';
import { removingActivitySelected } from '../redux/actions/selectedActions';

export const AddEditActivity = ({ activitySelected }) => {

    /* Redux */
    const dispatch = useDispatch()
    const { day, hour, min } = useSelector(state => state.selected.daySelected);
    
    /* State functions */
    const [activityId, setActivityId] = useState(null);
    const [formValues, setFormValues] = useState({
        startTime: `${hour}:${min}`,
        endTime: "",
        project: "",
        projectType: "",
        description: ""
    });
    const { startTime, endTime, project, projectType, description } = formValues;

    useEffect(() => {
        
        if(activitySelected){
            setActivityId(activitySelected.id);
            setFormValues({...activitySelected})
        }

    }, [activitySelected])

    /* Component functions */
    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeAddEditActivities = () => {
        dispatch( hideAddEditActivities() );
        dispatch( removingActivitySelected() );
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch( startUpdatingActivity(formValues, activityId) );
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch( startDeletingActivity(activityId) );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( startAddingActivity( formValues, day) );
    }

    return (
        <div className="AddEditActivity">
            <form 
                onMouseLeave={ closeAddEditActivities }
                onSubmit={ handleSubmit }>
                { !activitySelected ? <h2>Agrega una nueva actividad</h2> : <h2>Edita esta actividad</h2> }
                <span>
                    <svg className="close_icon" width="24" height="24">
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                    </svg>
                </span>

                <div>
                    <label htmlFor="project">Proyecto</label>
                    <select 
                        onChange={ handleInputChange }
                        name="project"
                        value={project}>
                        <option value="">Por favor escoja un proyecto...</option>
                        <option value="proyecto1">Project1</option>
                        <option value="proyecto2">Project2</option>
                        <option value="proyecto3">Project3</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="projectType">Tipo de actividad</label>
                    <select 
                        onChange={ handleInputChange }
                        name="projectType"
                        value={projectType}>
                        <option value="">Por favor escoja un tipo de actividad...</option>
                        <option value="analisis">Análisis</option>
                        <option value="calidad">Calidad</option>
                        <option value="desarrollo">Desarrollo</option>
                        <option value="diseño">Diseño</option>
                        <option value="gestProyectos">Gestión de Proyectos</option>
                        <option value="reunion">Reunión</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="description">Descripción</label> 
                    <textarea 
                        onChange={ handleInputChange}
                        name="description"
                        value={description}></textarea> 
                </div>

                <div>
                    <label htmlFor="startTime">Hora de inicio</label>
                    <input
                        onChange={ handleInputChange } 
                        type="time"
                        name="startTime"
                        min="06:00"
                        step="900"
                        value={startTime}
                        />

                    
                    <label htmlFor="endTime">Hora de final</label>
                    <input 
                        onChange={ handleInputChange }
                        type="time"
                        name="endTime"
                        max="21:00"
                        step="900"
                        value={ endTime }
                        />
                </div>

                <div className="btns">
                    <input 
                        className="cancel"
                        type="button"
                        value="Limpiar"/>

                    { activitySelected && (
                        <input 
                            className="cancel"
                            type="button"
                            onClick={ handleDelete }
                            value="Cancelar"/>)}
                    
                    {
                        !activitySelected 
                            ? <button
                                    className="confirm"
                                    type="submit">Confirmar</button>
                            : <button 
                                className="confirm"
                                onClick={ handleUpdate }
                                type="submit">Actualizar</button>
                    }
                    
                </div>
            </form>
            
        </div>
    )
}
