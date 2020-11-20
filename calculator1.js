// 더하기 구현
var sumNum = function(){
    var sum1 = document.getElementById('sum1');
    var sum2 = document.getElementById('sum2');
    var sumResult = Number(sum1.value) + Number(sum2.value);
    console.log(sumResult);    
}

btnSum.onclick = sumNum;

//빼기 구현
var diffNum = function(){
    var diff1 = document.getElementById('diff1');
    var diff2 = document.getElementById('diff2');
    var diffResult = Number(diff1.value) - Number(diff2.value);
    console.log(diffResult);    
}

btnDiff.onclick = diffNum;

//곱하기 구현
var multNum = function(){
    var mult1 = document.getElementById('mult1');
    var mult2 = document.getElementById('mult2');
    var multResult = Number(mult1.value) * Number(mult2.value);
    console.log(multResult);    
}

btnMult.onclick = multNum;

//나누기 구현
var divNum = function(){
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var divResult = Number(div1.value) / Number(div2.value);
    console.log(divResult);    
}

btnDiv.onclick = divNum;
