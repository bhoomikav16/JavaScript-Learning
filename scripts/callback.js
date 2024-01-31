// function display(some){
//     document.getElementById('demo').innerHTML=some;
// }

// function add(num1,num2,myCallback){
//     let sum=num1+num2;
//     myCallback(sum);
// }

// add(5,5,myCallback);
let logCall=function(){
    console.log("Logcall was called back");
}
setTimeout(logCall , 3000)
