var containerDiv = document.getElementsByClassName('container')[0];
var messageBox = document.getElementsByTagName('pre')[0];
var statsDiv = document.getElementById('stats');
var startDiv = document.getElementById('startDiv');
var startBtn = document.getElementById('startBtn');
var boxes = document.getElementsByClassName('box');
var message = `Connecting to satellite... Done!
Getting data... Done!
Location: Mars's orbit
Mission: "Red planet"
Objective: Teach aliens to play memory game!`;
var messageArr = message.split('');
var newMessage = '';
var selectedBox = [];
var tableBoxes = 64;
var text = "";
var countdown;
var timerValue;
var random;

connectionMsg();
countdown = setInterval(timerDown, 1000);
startBtn.addEventListener('click', createTable);

function connectionMsg() {
  if (messageArr.length !== 0) {
    newMessage += messageArr.shift();
    messageBox.innerHTML = newMessage;
    setTimeout(connectionMsg, 10);
  } else {
    start();
  }
}

function start() {
  startDiv.style.display = 'block';
}

function createTable() {
  startDiv.style.display = 'none';
  containerDiv.style.display = 'block';
  statsDiv.style.display = 'block';
  for (var i = 0; i < tableBoxes; i++) {
    random = Math.floor(Math.random()*icons.length);
    text += '<div class="box"><div class="back"><img src="' + icons[random] + '"></div><div class="front"></div></div>';
    icons.splice(random, 1);
    timerValue = 150;
  }
  containerDiv.innerHTML = text;
}

containerDiv.addEventListener('click', rotation);

function rotation(e) {
  if (e.target.className === "front" ) {
    var front = e.target;
    var back = e.target.previousElementSibling;
    selectedBox.push(front, back);
    front.style.transform = "perspective(900px) rotateY(180deg)";
    back.style.transform = "perspective(900px) rotateY(0deg)";
    if (selectedBox.length === 4) {
      testIcons();
    }
  }
}

function testIcons() {
  containerDiv.removeEventListener('click', rotation);
  if (selectedBox[1].innerHTML === selectedBox[3].innerHTML) {
    selectedBox.length = 0;
    containerDiv.addEventListener('click', rotation);
  } else {
    setTimeout(function () {
      selectedBox[0].style.transform = "perspective(900px) rotateY(0deg)";
      selectedBox[1].style.transform = "perspective(900px) rotateY(180deg)";
      selectedBox[2].style.transform = "perspective(900px) rotateY(0deg)";
      selectedBox[3].style.transform = "perspective(900px) rotateY(180deg)";
      selectedBox.length = 0;
      containerDiv.addEventListener('click', rotation);
    },600)
  }
}

function timerDown() {
  if (timerValue > 0) {
    timerValue--;
    timeUpdate();
  } else {
    clearInterval(countdown);
    info('Time is up!', 'Try again');
  }
}

function info() {

}

function timeUpdate() {
  var timeLeft
}
