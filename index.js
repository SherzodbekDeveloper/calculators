


let bir = document.getElementById('bir')
let operator = document.getElementById('operator');
let ikki = document.getElementById('ikki')
let btn = document.getElementById('btn');
let p  = document.getElementById('data')
let result;

btn.onclick = salom;

function salom(){
    const obj = {
        first: bir.value,
        second: ikki.value,  
        operator: operator.value ,
        
    }
    if ( obj.operator == "+"){
        result  =  +obj.first + +obj.second;
    }
    else if( obj.operator == "-"){
        result  =  obj.first - obj.second
        }
    else if( obj.operator == "*"){
        result  = obj.first * obj.second
    }
    else if (obj.operator == "/" || obj.operator == ":"){
        result  = obj.first / obj.second
    }

    
    p.innerHTML = "<h1 style='color:white; text-transform:uppercase;'>" + result +"</h1>"
}