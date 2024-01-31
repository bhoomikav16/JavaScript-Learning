let btn=document.getElementById('demo');
let count = 1;
btn.addEventListener('click',
function add(){
    console.log( count++,'add');
})

btn.addEventListener("click",add)

function add(){
    console.log(count++,'add');
    3+3;
}
btn.addEventListener('mouseover',ad)
function ad(){
    console.log('s')
}