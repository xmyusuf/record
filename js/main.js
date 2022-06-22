var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elBtn = document.querySelector(".js-btn");
var elList = document.querySelector(".js-list");

var record = new webkitSpeechRecognition();
record.lang = 'uz-UZ';



elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  var elInputVal = elInput.value;
  elInput.value = "";

  var elItem = document.createElement("li");
  elItem.textContent = `${elInputVal}`;
  elList.appendChild(elItem);

  record.onresult = function (evt) {
    var elItemSec = document.createElement("li");
    elItemSec.textContent = evt.results[0][0].transcript;
    elList.appendChild(elItemSec);
  }
})

elBtn.addEventListener('click', function () {
  record.start();

})
