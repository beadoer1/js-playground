var str = "";

var input = {
    n : 2, 
    getFirstValue : function(){
        num = Number(prompt("첫번째 숫자를 입력하세요."));
        str += num;
        return num;
    },

    getSecondValue : function(){
        num = Number(prompt( this.n + "번째 숫자를 입력하세요."));
        this.n++
        return num;
    },
    
    getOperator : function(){
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
}

var output = {
    printResult : function(result){
        return "최종 결과값은 " + str + " = " + result + " 입니다.";
    }
};

var calc = {
    calculate : function(first,second,op){
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
};

function main(){
    var result = input.getFirstValue();
    while(true){
        op = input.getOperator();
        if(op === "="){
            break;
        }
        n2 = input.getSecondValue();
        result = calc.calculate(result,n2,op);
    }
    console.log(result);
    var out = document.getElementById('output');
    out.innerHTML = output.printResult(result);
}

main();