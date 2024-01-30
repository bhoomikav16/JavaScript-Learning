const fruits=new Map();
fruits.set("apples",1300);
fruits.set("banana", 200);
fruits.set("grapes",300);
fruits.set("apples",500);
fruits.delete("apples")
console.log("fruits name / value", + fruits.get("grapes"));

let text="";
fruits.forEach(function(value,key){
    text+=key+'='+value+"\n";
})
console.log("new output: \n", text);