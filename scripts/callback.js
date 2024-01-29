function display(some){
    document.getElementById('demo').innerHTML=some;
}

function add(num1,num2,myCallback){
    let sum=num1+num2;
    myCallback(sum);
}

add(5,5,myCallback);