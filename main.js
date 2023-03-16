function printTime() {
  var clock = document.getElementById('time')
  var now = new Date()

  clock.innerHTML =
    now.getFullYear() +
    '년 ' +
    (now.getMonth() + 1) +
    '월 ' +
    now.getDate() +
    '일 ' +
    now.getHours() +
    '시 ' +
    now.getMinutes() +
    '분 ' +
    now.getSeconds() +
    '초'

  setTimeout('printTime()', 1000)
}

window.onload = function () {
  printTime()
}

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function green() {
  document.body.style.backgroundColor = 'green'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}

function showcss() {
  document.getElementById('fig').src = 'img/css3.jpg'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}

function showjs() {
  document.getElementById('fig').src = 'img/javascript.jpg'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. '
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
