Notification.requestPermission(function(permission){
// переменная permission содержит результат запроса
console.log('Результат запроса прав:', permission);
});


function pushRLT(title, text) {
  let p = new Notification(title, { body: text })
  return p
}

pushRLT('Тільки сьогодні', 'Тільки для вас');


$.notify(
  "Привіт",
  {
    position: "top left"
  }
);