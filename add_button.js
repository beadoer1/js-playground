
var readInput = function(){
    var input1 = document.getElementById('input1');
    console.log(input1.value);
}

var btn2 = document.createElement('button');
btn2.innerHTML = "버튼2";
btn2.onclick = readInput;
var test1 = document.getElementById('test1');
test1.appendChild(document.createElement('br'));
test1.appendChild(btn2);
