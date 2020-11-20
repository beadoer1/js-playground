var main = function(){
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);

    var signEl = document.getElementById('sign');
    var sign = signEl.value

    var out = document.getElementById('output');
    var str = "결과 : ";

    if(sign == "+"){
        var sumNum = n1+n2;
        console.log(sumNum);
        str += sumNum + " 입니다.";
    }
    else if(sign == "-"){
        diffNum = n1-n2;
        console.log(diffNum);
        str += diffNum + " 입니다.";
    }
    else if(sign == "*"){
        multNum = n1*n2;        
        console.log(multNum);
        str += multNum + " 입니다.";
    }
    else if(sign == "/"){
        divNum = n1/n2;        
        console.log(divNum);
        str += divNum + " 입니다.";
    }
    else{
        console.log("기호를 잘못 입력하였습니다.");
        str += "기호를 잘못 입력하였습니다."
    }

    out.innerHTML = str;
}

