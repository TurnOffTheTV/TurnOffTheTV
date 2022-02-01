var turnOffTheTV;
var schedule = ["Sleep","Sleep","Sleep","Sleep","Sleep","Sleep","Sleep","Wake up","Programming","Programming","Programming","Programming","Lunch","Walk Outside","Website Programming","Programming","Programming","Programming","Dinner","TV Show/Gaming","TV Show/Gaming","Sleep","Sleep","Sleep",];

function preload(){
  turnOffTheTV=loadPerson("/people/TurnOffTheTV");
}

function setup(){
  person(turnOffTheTV);
}

function getScheduleItem(time){
  return schedule[time];
}
