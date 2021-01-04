'use strict'
// коректний вивід дати//

function localDate(year, month, day){
  localDate.MONTH = ['Січень', 'Лютий', 'Беезень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
  localDate.ENDMONTH = ['Січня', 'Лютого', 'Беезеня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня']
  localDate.DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Ср', 'Сб', 'Нд'];
  const localDateObj = {
    _date: new Date(year, month - 1, day), //Місяць починається з 0 тому -1)) для вводу
    getDate(){
      return localDateObj._date.getDate(); // (функція виводить задану дату)
    },
    getMonthNumber(){
      return localDateObj._date.getMonth() + 1; // виводить місяць але від 0 до 11
    },
    getMonthName(){
      return localDate.MONTH[localDateObj._date.getMonth()]; // місяць замінюється на вказаний в масиві
    },
    getEndMonth(){
      return localDate.ENDMONTH[localDateObj._date.getMonth()]
    },
    getFullYear(){
      return localDateObj._date.getFullYear() // визначається повний рік
    },
    getDay(){
      return (localDateObj._date.getDay() - 1 + 7) % 7 // день тижня починається з неділі тому - 1 + 7 і остача від ділення на 7
    },
    getDaysName(){
      return localDate.DAYS[localDateObj._date.getDay()]; // дени тижня замінюється на значення масиву
    },
    toString(){
      return `${localDateObj.getDaysName()}, ${localDateObj.getDate()}, ${localDateObj.getEndMonth()}, ${localDateObj.getFullYear()}`
    } // вивід строки функцій одна за одной 
  };
  
  return localDateObj
}
//console.log(localDate(2020, 12, 3).toString());// toString для вивода в строку))


function calendar(monthNum, yearsNum){
  const firstDay = localDate(yearsNum, monthNum, 1);
  const lastDay = localDate(yearsNum, monthNum + 1, 0); // або 0
  const monthDays = [];
  const lastDayNum = lastDay.getDate() + 6 - lastDay.getDay()
  for(let dayNum = 1 - firstDay.getDay(); dayNum <= lastDayNum; dayNum++){
    monthDays.push(localDate(yearsNum, monthNum, dayNum))
  }


  return {
    firstDay,
    lastDay,
    monthDays
  }
}

console.log(calendar(12, 2020));