var containerDiv = document.getElementsByClassName('container')[0];
var clicks4 = [];
var text = "";
var tableBoxes = 64;
var random;
createTable();
var boxes = document.getElementsByClassName('box');

function createTable() {
  for (var i = 0; i < tableBoxes; i++) {
    random = Math.floor(Math.random()*icons.length);
    text += '<div class="box"><div class="back"><i class="fa ' + icons[random] + '"></i></div><div class="front"></div></div>';
    icons.splice(random, 1);
  }
  containerDiv.innerHTML = text;
}

containerDiv.addEventListener('click', rotation);

function rotation(e) {
  if (e.target.className === "front" ) {
    var front = e.target;
    var back = e.target.previousElementSibling;
    clicks4.push(front, back);
    front.style.transform = "perspective(900px) rotateY(180deg)";
    back.style.transform = "perspective(900px) rotateY(0deg)";
    if (clicks4.length === 4) {
      testIcons();
    }
  }
}

function testIcons() {
  containerDiv.removeEventListener('click', rotation);
  if (clicks4[1].innerHTML === clicks4[3].innerHTML) {
    console.log('radi');
    clicks4.length = 0;
    containerDiv.addEventListener('click', rotation);
  }else {
    setTimeout(function () {
      clicks4[0].style.transform = "perspective(900px) rotateY(0deg)";
      clicks4[1].style.transform = "perspective(900px) rotateY(180deg)";
      clicks4[2].style.transform = "perspective(900px) rotateY(0deg)";
      clicks4[3].style.transform = "perspective(900px) rotateY(180deg)";
      clicks4.length = 0;
      containerDiv.addEventListener('click', rotation);
    },600)
  }
}

