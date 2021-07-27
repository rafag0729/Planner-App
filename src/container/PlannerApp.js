import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../moment-config';

import { WholeWeek } from '../components/wholeWeek/WholeWeek';

import { formattingDate, settingDaysFromWeek } from '../helpers/helperFunctions';
import { startFirstLoadingActivities } from '../redux/actions/activitiesActions';
import { ColorContext } from '../context/ColorContext';

export const PlannerApp = () => {
    
    /* Redux */
    const dispatch = useDispatch();

    /* Context */
    const { color, setColor } = useContext(ColorContext);
    const [ proyecto1, proyecto2, proyecto3 ] = color;
    
    /* State */
    const [datePicked, setDatePicked] = useState(formattingDate());
    const [dates, setDates] = useState([]);

    useEffect(() => {
        setDates(settingDaysFromWeek(datePicked, true));
    }, [datePicked])

    useEffect(() => {
        dispatch( startFirstLoadingActivities() );
    }, [dispatch])
    
    /* Component functions */
    const handleChangeDatePicker = ({target}) => {
        setDatePicked(target.value);
    }

    const handleColorChange = ({target}) => {
        setColor(color.map((color) => {
            if(color.name === target.name){
                return {
                    ...color,
                    color: target.value
                }
            } else {
                return {...color}
            }
        }))
    }

    const darkMode = () => {
        const body = document.querySelector("body");
        body.classList.toggle("dark");
    }

    return (
        <>
            <header>
                <div className="container">
                    <h1
                        onClick={ darkMode}
                    >PLANNER APP</h1>
                    
                    <div className="profileInfo">
                        <p>Nombre del usuario</p>
                        <p>correo@correo.com</p>
                        <svg className="userIcon" width="24" height="24">
                            <path />
                        </svg>
                    </div>
                </div>
            </header>
            
        <div className="container">
            <div className="calendar_color">
                <form className="colorProjects">
                    <h3>Asigna un color a tus proyectos</h3>
                    <div>
                        <label>
                            <div
                                style={{ backgroundColor: proyecto1.color}}
                                className="colorPicker"></div>
                            <input
                                id="colorInput1"
                                onChange={ handleColorChange }
                                name="proyecto1" 
                                type="color"
                                value={proyecto1.color}/> Proyecto1
                        </label>
                    
                        <label>
                            <div 
                                style={{ backgroundColor: proyecto2.color}}
                                className="colorPicker"></div> 
                            <input
                                id="colorInput2" 
                                onChange={ handleColorChange }
                                name="proyecto2" 
                                type="color"
                                value={proyecto2.color}/> Proyecto2
                        </label>
                    
                        <label>
                            <div
                                style={{ backgroundColor: proyecto3.color}}
                                className="colorPicker"></div>
                            <input 
                                id="colorInput3"
                                onChange={ handleColorChange }
                                name="proyecto3" 
                                type="color"
                                value={proyecto3.color}/> Proyecto3
                        </label>
                    </div>
                </form>

                <div className="calendarPicker">
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
        </>
    )
}
