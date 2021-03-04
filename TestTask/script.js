'use strict'

function LocalDate(yearNum, monthNum, dayNum) {
  
  this._d = new Date(yearNum, monthNum - 1, dayNum);
  
}

LocalDate.MONTHES = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
LocalDate.MONTHESINDAY = ['Січня', 'Лютого', 'Березеня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
LocalDate.DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
LocalDate.FULLDAYS = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя']

LocalDate.prototype.getDate = function() {
  return this._d.getDate();
};
LocalDate.prototype.getMonthNum = function() {
  return this._d.getMonth() + 1;
};
LocalDate.prototype.getMonthName = function() {
  return LocalDate.MONTHES[this._d.getMonth()];
};
LocalDate.prototype.getMonthSindayName = function() {
  return LocalDate.MONTHESINDAY[this._d.getMonth()];
};
LocalDate.prototype.getFullYear = function() {
  return this._d.getFullYear();
};
LocalDate.prototype.getDay = function() {
  return (this._d.getDay() - 1 + 7) % 7;
};
LocalDate.prototype.getDayNames = function() {
  return LocalDate.DAYS[this.getDay()];
};
LocalDate.prototype.getFullDayNames = function() {
  return LocalDate.FULLDAYS[this.getDay()];
};
LocalDate.prototype.toString = function() {
  return `${this.getDayNames()}, ${this.getDate()} ${LocalDate.MONTHESINDAY[this._d.getMonth()]} ${this.getFullYear()}`
};
//console.log(new LocalDate(2020, 12, 28).toString() );

const dateUs = new Date;
const dayDateUs = dateUs.getDay()
const monthDateUs = dateUs.getMonth() + 1
const yearDateUs = dateUs.getFullYear()
const weakName = LocalDate.FULLDAYS[(dateUs.getDay() - 1 + 7) % 7]




function Calendar(dayName, monthNum, yearNum){


  this.fullDayWeakName = new LocalDate(yearNum, monthNum, dayName).getFullDayNames();
  this.dayName = dayName

  this._createMonthParam(monthNum, yearNum)
  this._init()
  this.fillTaskBordDate()
  this.fillHeader()
  this.fillWeaksName()
  this.fillDayElement()
  this.fillFullDay()

};


Calendar.prototype._shiftMonth = function(shiftMonth){
  this._createMonthParam(this.monthNum + shiftMonth, this.yearNum);
  console.log(this);

  this.fillDayElement()
  this.fillHeader()
}

Calendar.prototype._createMonthParam = function(monthNum, yearNum){

  this.firstDay = new LocalDate(yearNum, monthNum, 1);
  this.lastDay = new LocalDate(yearNum, monthNum + 1, 0);
  this.monthDays = [];
  this.monthNum = monthNum;
  this.yearNum = yearNum

  const lastDayNum = this.lastDay.getDate() + 6 - this.lastDay.getDay();

  for (let dayNum = 1 - this.firstDay.getDay(); dayNum <= lastDayNum; dayNum++){
    this.monthDays.push(new LocalDate(this.yearNum, this.monthNum, dayNum))
  }
}

Calendar.prototype._init = function(){

  this._headerEl = document.querySelector('.navCal__month');
  this._dayNamesEl = document.querySelector('.navCal__calendarWeek');
  this._daysEl = document.querySelector('.navCal__calendarDay')
  this._taskBordDate = document.querySelector('.taskBoard__viev--Week')
  this._taskBordNameDate = document.querySelector('.taskBoard__viev--Data')
  this._prevButton = document.querySelector('.navCal__muveBefore')
  this._afterButton = document.querySelector('.navCal__muveAfter')

  this._prevButton.addEventListener('click', this._shiftMonth.bind(this, -1))

  this._afterButton.addEventListener('click', this._shiftMonth.bind(this, 1))

}

Calendar.prototype.fillHeader = function(){
  this._headerEl.innerText = `${this.firstDay.getMonthName()} ${this.firstDay.getFullYear()}`;
}

Calendar.prototype.fillTaskBordDate = function(){
  this._taskBordDate.innerText = `${this.dayName} ${this.firstDay.getMonthSindayName()}`;
}

Calendar.prototype.fillWeaksName = function(){
  this._dayNamesEl.innerText = ''
  const dayNameCall = LocalDate.DAYS.map(dayName => {
    const dayEl = document.createElement('li');
    dayEl.classList.add('navCal__calendarWeek--Name')
    dayEl.innerText = dayName;
    return dayEl;
  })
  this._dayNamesEl.append(...dayNameCall)
}

Calendar.prototype._renderDay = function(localDay){
  const el = document.createElement('li')

  el.innerText = localDay.getDate();

  el.classList.add('CalendarDay');

  if(localDay.getMonthNum() !== this.monthNum){
    el.classList.add('CalendarDay--notInSort')
  }

  if(localDay.getDate() === this.dayName && localDay.getMonthNum() === this.monthNum){
    el.classList.add('CalendarDay--Active')
  }

  return el;

} 

Calendar.prototype.fillDayElement = function(){
  this._daysEl.innerText = ''
  const dayElCall = this.monthDays.map(this._renderDay, this)
  this._daysEl.append(...dayElCall);
}

Calendar.prototype.fillFullDay = function(){
  this._taskBordNameDate.innerText =`${this.fullDayWeakName}`;
};

 

console.log(new Calendar(dayDateUs, monthDateUs, yearDateUs));

