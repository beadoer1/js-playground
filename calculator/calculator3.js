var numFrom, numTo, arith;
var str = "";

numFrom = Number(prompt("숫자를 입력하세요."));
str += numFrom;

while(arith != "="){

    arith = prompt("연산기호(사칙연산) 입력.(종료 시 '=' 입력)");
    if (arith === "="){
        break;
    }

    numTo = Number(prompt("숫자 입력"));

    if(arith === "+"){
        numFrom = numFrom + numTo;
        str += " + " + numTo;
    } else if(arith === "-"){
        numFrom = numFrom - numTo;
        str += " - " + numTo;
    } else if(arith === "*"){
        numFrom = numFrom * numTo;
        str += " * " + numTo;
    } else if(arith === "/"){
        numFrom = numFrom / numTo;
        str += " / " + numTo;
    } else{
        console.log("기호를 잘못 입력하셨습니다.");
        break;
    }

}

document.write(str + " = " + numFrom);
