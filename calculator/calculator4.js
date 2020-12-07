var str = "";
var n = 2;

function getFirstValue(){
    num = Number(prompt("첫번째 숫자를 입력하세요."));
    str += num;
    return num;
};

function getSecondValue(){
    num = Number(prompt(n + "번째 숫자를 입력하세요."));
    n++
    return num;
};

function getOperator(){
    while(true){
        o = prompt("연산기호(사칙연산)를 입력하세요.(종료 시 '=' 입력)");
        if(o==="+"||o==="-"||o==="*"||o==="/"||o==="="){
            break;
        } else{
            alert("잘못된 형식을 입력하였습니다.");
        }
    }
    return o;
}

function calculate(first,second,op){
    if(op === "+"){
        first += second;
        str += " + " + second;
    } else if(op === "-"){
        first -= second;
        str += " - " + second;
    } else if(op === "*"){
        first *= second;
        str += " * " + second;
    } else if(op === "/"){
        first /= second;
        str += " / " + second;
    } else {
        return;
    }
    return first;
}

function printResult(result){
    return "최종 결과값은 " + str + " = " + result + " 입니다.";
}

function main(){
    var result = getFirstValue();
    while(true){
        op = getOperator();
        if(op === "="){
            break;
        }
        n2 = getSecondValue();
        result = calculate(result,n2,op);
    }
    console.log(result);
    var output = document.getElementById('output');
    output.innerHTML = printResult(result);
}

main();