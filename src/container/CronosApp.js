import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../moment-config';

import { WholeWeek } from '../components/wholeWeek/WholeWeek';

import { formattingDate, settingDaysFromWeek } from '../helpers/helperFunctions';
import { startFirstLoadingActivities } from '../redux/actions/activitiesActions';
import { ColorContext } from '../context/ColorContext';

export const CronosApp = () => {
    
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
                    <svg onClick={ darkMode } id="cronos_logo" width="60.067mm" height="17.387mm" version="1.1" viewBox="0 0 60.067 17.387" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(-130.08 -96.101)">
                            <path />
                        </g>
                    </svg>
                    
                    <div className="profileInfo">
                        <p>Nombre del usuario</p>
                        <p>correo@olsoftware.com</p>
                        <svg className="userIcon" width="24" height="24">
                            <path />
                        </svg>
                        {/* <img src={ userIcon } alt="Imagen del usuario"/> */}
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
