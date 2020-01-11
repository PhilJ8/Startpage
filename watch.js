let currentHour = addZeros (new Date().getHours());
let currentMinute = addZeros ( new Date().getMinutes());
let currentSec = addZeros ( new Date().getSeconds());

setTime();

setInterval( () => {
  setTime();
}, 1000);

function setTime() {
  currentHour = addZeros (new Date().getHours());
  currentMinute = addZeros ( new Date().getMinutes());
  currentSec= addZeros ( new Date().getSeconds());
  document.getElementById("spanHour").innerText = currentHour + ":" +  currentMinute + ":" + currentSec ;
}
function addZeros(nb){
  if(nb<10) {
    return "0" + nb;
  }
  return nb;
}
