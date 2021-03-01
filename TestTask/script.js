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
      getMonthSindayName() {
          return localDate.MONTHESINDAY[localDateObj._d.getMonth()];
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
      getFullDayNames() {
          return localDate.FULLDAYS[localDateObj.getDay()];
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
localDate.FULLDAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя']

//console.log( localDate(2020, 12, 28).toString() );

let dateUs = new Date;
let dayDateUs = dateUs.getDay()
let monthDateUs = dateUs.getMonth() + 1
let yearDateUs = dateUs.getFullYear()
let weakName = localDate.FULLDAYS[(dateUs.getDay() - 1 + 7) % 7]




function calendar(dayName, monthNum, yearNum){
  const firstDay = localDate(yearNum, monthNum, 1);
  const lastDay = localDate(yearNum, monthNum + 1, 0);
  const monthDays = [];
  const lastDayNum = lastDay.getDate() + 6 - lastDay.getDay();
  let _headerEl, _dayNamesEl, _daysEl;

  _headerEl = document.querySelector('.navCal__month');
  _dayNamesEl = document.querySelector('.navCal__calendarWeek');
  _daysEl = document.querySelector('.navCal__calendarDay')
  _taskBordDate = document.querySelector('.taskBoard__viev--Week')
  _taskBordNameDate = document.querySelector('.taskBoard__viev--Data')

  for (let dayNum = 1 - firstDay.getDay(); dayNum <= lastDayNum; dayNum++){
    monthDays.push(localDate(yearNum, monthNum, dayNum))
  }

  function fillHeader(){
    _headerEl.innerText = `${firstDay.getMonthName()} ${firstDay.getFullYear()}`;
  }
  function fillTaskBordDate(){
    _taskBordDate.innerText = `${dayName} ${firstDay.getMonthSindayName()}`;
  }
  function fillWeaksName(){
    _dayNamesEl.innerText = ''
    const dayNameCall = localDate.DAYS.map(dayName => {
      const dayEl = document.createElement('li');
      dayEl.classList.add('navCal__calendarWeek--Name')
      dayEl.innerText = dayName;
      return dayEl;
    })
    _dayNamesEl.append(...dayNameCall)
  }

  function _renderDay(localDay){
    const el = document.createElement('li')
    el.innerText = localDay.getDate();
    el.classList.add('CalendarDay');

    if(localDay.getMonthNum() !== monthNum){
      el.classList.add('CalendarDay--notInSort')
    }

    if(localDay.getDate() === dayName && localDay.getMonthNum() === monthNum){
      el.classList.add('CalendarDay--Active')
    }

    return el;

  } 

  function fillDayElement(){
    _daysEl.innerText = ''
    const dayElCall = monthDays.map(_renderDay)
    _daysEl.append(...dayElCall);
  }

  function fillFullDay(){
    _taskBordNameDate.innerText =`${weakName}`;
  };

  //console.log(localDate.FULLDAYS[]);

  fillTaskBordDate()
  fillHeader()
  fillWeaksName()
  fillDayElement()
  fillFullDay()


  return {
    _headerEl, 
    _dayNamesEl, 
    _daysEl,
    firstDay,
    lastDay,
    monthDays,
    dayName

  };



};

calendar(dayDateUs, monthDateUs, yearDateUs);

