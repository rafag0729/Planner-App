import React, { useEffect, useState } from 'react';
import { momentData } from './../moment-config';
import { WholeWeek } from './WholeWeek';

import userIcon from './../assets/user.svg';
/* import calendarIcon from './../assets/calendar.svg'; */

import { formattingDate, settingDaysFromWeek } from '../helpers/helperFunctions';

export const CronosApp = () => {
    
    const [datePicked, setDatePicked] = useState(formattingDate());/* 2017-06-01 needed */
    const [dates, setDates] = useState([]);

    useEffect(() => {

        const curdate = formattingDate();
        
        console.log(datePicked);
        setDatePicked(curdate);
        /* setDatePicked(formattingDate()); */

    }, [])

    const handleChangeDatePicker = ({target}) => {
        setDatePicked(target.value);
        setDates(settingDaysFromWeek(target.valueAsDate));
    }

    return (
        <div className="container">
            <h1>New Cronos App</h1>

            <div className="profileInfo">
                <p>Nombre del usuario</p>
                <p>correo@olsoftware.com</p>
                <img src={ userIcon } alt="Imagen del usuario"/>
            </div>
            
            <div className="calendar_color">
                <div>
                    <input 
                        type="date" 
                        onChange={ handleChangeDatePicker } 
                        value={ datePicked }
                        />
                    {/* <img src={ calendarIcon } alt="Calendario"/> */}
                </div>

                <div className="colorProjects">
                    <h3>Asigna un color a tus proyectos</h3>
                    <p><label><input type="color"/> Proyecto1</label></p>
                    <p><label><input type="color"/> Proyecto2</label></p>
                    <p><label><input type="color"/> Proyecto3</label></p>
                </div>
            </div>
            
            <WholeWeek dates={dates}/>
        </div>
    )
}
