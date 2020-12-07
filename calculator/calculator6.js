var str = "";

var input = {
    arith : function(){
        a = document.getElementById('arithmatic').value;
        return a;
    }
};

var spl = {
    arithArr: function(s){
        b = s.split(" ");
        return b;
    }
};

var calc = {
    cal1 : function(s){
        c = Number(s[0]);
        str += c;
        for(var i = 1; i < s.length; i+=2){
            d = s[i];
            e = Number(s[i+1]);
            c = this.calc2(c, e, d);
        };
        return c;
    },
    calc2 : function(first,second,op){
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
            return ;
        }
        return first;
    }
}; 

var output = {
    printResult : function(result){
        var out = document.getElementById('output');
        out.innerHTML = "최종 결과값은 " + str + " = " + result + " 입니다.";
    }    
};

var main = function(){
    i = input.arith();
    s = spl.arithArr(i);
    c = calc.cal1(s);
    o = output.printResult(c);
    console.log(o);
    str = "";
};