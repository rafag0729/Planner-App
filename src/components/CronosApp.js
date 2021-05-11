import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './../moment-config';

import { WholeWeek } from './WholeWeek';

import userIcon from './../assets/user.svg';

import { formattingDate, settingDaysFromWeek } from '../helpers/helperFunctions';
import { startFirstLoadingActivities } from '../redux/actions/activitiesActions';

export const CronosApp = () => {
    
    /* Redux */
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities)
    
    /* State */
    const [datePicked, setDatePicked] = useState(formattingDate());
    const [dates, setDates] = useState([]);

    useEffect(() => {
        setDates(settingDaysFromWeek(datePicked, true));
    }, [datePicked])

    useEffect(() => {
        dispatch( startFirstLoadingActivities() );
    }, [])
    
    /* Component functions */
    const handleChangeDatePicker = ({target}) => {
        setDatePicked(target.value);
    }

    const handleColorChange = ({target}) => {
        console.log(target.value)
    }

    return (
        <div className="container">
            <header>
                <h1>New Cronos App</h1>

                <div className="profileInfo">
                    <p>Nombre del usuario</p>
                    <p>correo@olsoftware.com</p>
                    <img src={ userIcon } alt="Imagen del usuario"/>
                </div>
            </header>
            
            <div className="calendar_color">
                <form className="colorProjects">
                    <h3>Asigna un color a tus proyectos</h3>
                    <p>
                        <label><input 
                            onChange={ handleColorChange }
                            name="project1" 
                            type="color"/> Proyecto1
                        </label>
                    </p>
                    <p>
                        <label><input 
                            onChange={ handleColorChange }
                            name="project2" 
                            type="color"/> Proyecto2</label>
                    </p>
                    <p>
                        <label><input 
                            onChange={ handleColorChange }
                            name="project3" 
                            type="color"/> Proyecto3</label>
                    </p>
                    
                </form>

                <div>
                    <h3>Asigna una fecha</h3>
                    <input 
                        type="date" 
                        onChange={ handleChangeDatePicker } 
                        value={ datePicked }
                        />
                </div>
            </div>
            
            <WholeWeek dates={dates}/>
        </div>
    )
}
