import moment from 'moment';

export const settingDaysFromWeek = (date) => {

    const datePicked1 = moment(date);
    const datePicked2 = datePicked1.clone();
        
    const firstDayOfWeek = datePicked1.day(0);
    const lastDayOfWeek = datePicked2.day(7);

    let weekDays = [];

    do {
        firstDayOfWeek.add(1, 'd');
        weekDays.push(firstDayOfWeek.clone());
        
    } while(firstDayOfWeek.get('date') !== lastDayOfWeek.get('date'))

    weekDays.pop();
    return weekDays;
}

export const formattingDate = () => {

    const curDate = new Date();
    const day = curDate.getDate();
    const month = curDate.getMonth();
    const year = curDate.getFullYear();
    console.log('Formatting function is running');
    return `${year}-${month}-${day}`;
}