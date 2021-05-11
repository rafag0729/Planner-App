import React, {useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';

import { WholeDay } from './WholeDay';
    
import { showDayModal } from './../redux/actions/uiActions';

import { formattingDate } from './../helpers/helperFunctions';
import { DayFromWeek } from './DayFromWeek';
import { settingDaySelected } from '../redux/actions/selectedActions';

export const WholeWeek = ({dates}) => {
    
    /* Redux */
    const { modalDayDetail } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    /* State */
    const [daySelected, setDaySelected] = useState(formattingDate());
    
    /* Component functions */
    const dispatchingModal = (date) => {

        const plainDate = formattingDate(date);
        setDaySelected(date);
        dispatch(settingDaySelected(plainDate));
        dispatch( showDayModal() );
    }
    
    return (
        <>
            {
                dates && (
                    <>
                        <h2>Semana del {dates[0]?.get('date')} al {dates[5]?.get('date')} de {dates[5]?.format('MMMM')} de {dates[5]?.get('year')}</h2>

                        <div className="wholeWeek">
                            {
                                dates.map((date, i) => (
                                        <DayFromWeek
                                            dispatchingDayModal={ () => dispatchingModal(date) }
                                            key={ i }
                                            date={ date }/>
                                ))
                            }
                        </div>
                    </>
                )
            }
            
            <CSSTransition
                in={ modalDayDetail }
                timeout={500}
                unmountOnExit
                classNames="addEditTransition">
                    <div>
                        <WholeDay day={ daySelected } />
                    </div>
            </CSSTransition>
        </>
    )
}
