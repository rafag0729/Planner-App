/* import moment from 'moment' */
import React, { useEffect } from 'react'
import { WholeDay } from './WholeDay'

export const WholeWeek = ({dates}) => {
    
    useEffect(() => {
        
    }, [dates])

    
    return (
        <>
            <h2>Semana del {dates[0]?.get('date')} al {dates[5]?.get('date')} de Mayo de 2021</h2>  

            <div className="wholeWeek">
            {
                dates.map((date, i) => {
                    
                    const dayName = date.format('dddd');
                    const dayNumber = date.format('D');
                    const month = date.format('MMMM');
                    
                    return ( <div
                        key={ i } 
                        className="dayFromWeek">
                        <h4>{`${dayName} ${dayNumber} de ${month}`}</h4>
                        
                        <table>
                            <tbody>
                                <tr><td>6</td></tr>
                                <tr><td>7</td></tr>
                                <tr><td>8</td></tr>
                                <tr><td>9</td></tr>
                                <tr><td>10</td></tr>
                                <tr><td>11</td></tr>
                                <tr><td>12</td></tr>
                                <tr><td>13</td></tr>
                                <tr><td>14</td></tr>
                                <tr><td>15</td></tr>
                                <tr><td>16</td></tr>
                                <tr><td>17</td></tr>
                                <tr><td>18</td></tr>
                                <tr><td>19</td></tr>
                                <tr><td>20</td></tr>
                                <tr><td>21</td></tr>
                            </tbody>
                        </table>

                        <div className="circles">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            
                        </div>
                    </div>
                )})
            }
            </div>
            
            {/* <WholeDay /> */}
        </>
    )
}
