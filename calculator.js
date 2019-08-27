// function that displays a value
function dis(val) {
    if(val==='clear'){
        document.getElementById("result").value='';
    }else
    document.getElementById("result").value+=val;
}
//function that evaluates the digit and return result 
function solve() 
{ 

let x = document.getElementById("result").value 
let y = eval(x) 
document.getElementById("result").value = y 
}

function changePage(page){
    if(page === "calculator"){
    document.getElementById('main').style.display = "block"
    document.getElementById('luck-main').style.display = 'none'
    }else{
        document.getElementById('main').style.display = "none"
        document.getElementById('luck-main').style.display = 'block'  
    }
}
var luckArray = [
    "you will get money today",
    "you will get a bike ride",
    "you will get a movie ticket",
    "you have to play a cricket match",
    "you have a bad day ahead",
    "you will get more chances",
    "you will enjoy today",
    "you will be sick today",
    "you have to go jail today",
    "You will get rice today"
];

function luckFunc(){
    var name = document.getElementById('name').value
    if(name === "")
    alert("please enter a name ");
    
    var dob = document.getElementById('dob').value
    document.getElementById("result-luck").value =dob;
    var rand_Number = Math.floor(Math.random()*10)
    //console.log(luckArray[1])
    document.getElementById("result-luck").value= "Hello " + name +"," + " " + luckArray[rand_Number];
    
}



