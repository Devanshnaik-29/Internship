let a = document.getElementById("cal");
let n1 = document.getElementById("num-1");
let n2 = document.getElementById("num-2");
let res = 0;
let x = document.getElementById("result")

function Add(){
    res = parseInt(n1.value) + parseInt( n2.value);
    x.value = res;
}
function Sub(){

    res = parseInt(n1.value) - parseInt( n2.value);
    x.value = res;

}
function Mul(){
    res = parseInt(n1.value) * parseInt( n2.value);

    x.value = res;

}
function Division(){
    
    res = parseInt(n1.value) / parseInt( n2.value);
    x.value = res;

}



