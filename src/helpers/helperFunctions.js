import moment from 'moment';



/* First format for default Date */
export const formattingDate = (dayPassed) => {

    let dayPicked;

    if(dayPassed){
        dayPicked = dayPassed;/* Llegara momentDay en esta fecha */
    } else {
        dayPicked = moment(new Date());
    }
    
    let day = (dayPicked.get('date')).toString();
    let month = (dayPicked.get('month')+1).toString();
    let year = (dayPicked.get('year')).toString();
    
    if(day.length === 1){
        day = "0"+day;
    }

    if(month.length === 1){
        month = "0"+month;
    }
    return `${year}-${month}-${day}`;
}

/* Getting Array Days of Week */
export const settingDaysFromWeek = (date, initial = false) => {

    const datePicked1 = moment(date);
    const datePicked2 = datePicked1?.clone();
        
    const firstDayOfWeek = datePicked1.day(0);
    const lastDayOfWeek = datePicked2.day(7);

    let weekDays = [];

    do {
        firstDayOfWeek.add(1, 'd');
        weekDays.push(firstDayOfWeek.clone());
        
    } while(firstDayOfWeek.get('date') !== lastDayOfWeek?.get('date'))

    weekDays.pop();
    return weekDays;
}

/* Getting Array Hours from Day */
export const settingTime = (day, initial = false) => {

    let dayPicked = day;
    if(initial){
        dayPicked = moment(day);
    }

    const firstHour = dayPicked.hours(6);
    const lastHour = firstHour.clone().hour(21);

    let hoursOfDay = [];

    do{
        hoursOfDay.push(firstHour.clone());
        firstHour.add(1, 'h');

    } while(firstHour.get('hour') !== lastHour.get('hour'))

    return hoursOfDay;
}

/* Formatting hour and min from Moment objects */
export const formattingHoursMinutes = (hour, min) => {

    let formattedHour = hour.get('hour').toString();
    let formattedMin = min.get('minute').toString();
    
    if(formattedHour.length === 1){
        formattedHour = '0'+formattedHour;
    }

    if(formattedMin.length === 1){
        formattedMin = '0'+formattedMin;
    }

    return {
        formattedHour,
        formattedMin
    }

}

/* Getting Array 4 Quarter of minutes per hour */
export const settingMinutesFromHour = (hour, initial = false) => {

    let hourPicked = hour;
    if(initial){
        hourPicked = moment(hour);
    }

    const firstMinute = hourPicked.hour(0);
    const lastMinute = firstMinute.clone().hour(1);
    
    let minutesOfHour = [];

    do{ 
        minutesOfHour.push(firstMinute.clone());/* .get('minute').toString() */
        firstMinute.add(15, 'm');

    } while(firstMinute.get('minute') !== lastMinute.get('minute'))

    return minutesOfHour;
}


/* Getting date format required  */
export const gettingDateFormat = (date, initial = false) => {
    
    let dayPicked = date;
    if(initial){
        dayPicked = moment(date);
    }

    const dayName = dayPicked.format('dddd');
    const dayNumber = dayPicked.format('D');
    const month = dayPicked.format('MMMM');

    return { dayName, dayNumber, month };
}