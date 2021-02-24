function localDate(yearNum, monthNum, dayNum) {
  const localDateObj = {
      _d: new Date(yearNum, monthNum - 1, dayNum),
      getDate() {
          return localDateObj._d.getDate();
      },
      getMonthNum() {
          return localDateObj._d.getMonth() + 1;
      },
      getMonthName() {
          return localDate.MONTHES[localDateObj._d.getMonth()];
      },
      getFullYear() {
          return localDateObj._d.getFullYear();
      },
      getDay() {
          return (localDateObj._d.getDay() - 1 + 7) % 7;
      },
      getDayNames() {
          return localDate.DAYS[localDateObj.getDay()];
      },
      toString() {
          return `${localDateObj.getDayNames()}, ${localDateObj.getDate()} ${localDate.MONTHESINDAY[localDateObj._d.getMonth()]} ${localDateObj.getFullYear()}`
      }
  };

  return localDateObj;
}

localDate.MONTHES = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
localDate.MONTHESINDAY = ['Січня', 'Лютого', 'Березеня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
localDate.DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

//console.log( localDate(2020, 12, 28).toString() );


function calendar(monthNum, yearNum, rootSelector){
  const firstDay = localDate(yearNum, monthNum, 1);
  const lastDay = localDate(yearNum, monthNum + 1, 0);
  const monthDays = [];
  const lastDayNum = lastDay.getDate() + 6 - lastDay.getDay();
 

  for (let dayNum = 1 - firstDay.getDay(); dayNum <= lastDayNum; dayNum++){
    monthDays.push(localDate(yearNum, monthNum, dayNum))
  }


  return {
    _rootEl,
    firstDay,
    lastDay,
    monthDays
  };



};


console.log(calendar(03, 2020, '.navCal__calendar'));
console.log(calendar(02, 2020, '.navCal__calendarJS'));
