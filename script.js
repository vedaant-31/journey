var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inner = document.querySelector(".inner");
var bottom = document.querySelector("bottom");
var grow= 0;
var time= Math.floor(Math.random()*30)+50

btn.addEventListener("click", function(){
    var bar = setInterval(() => {
        grow++
        h2.innerHTML=grow+'%'
        inner.style.width=grow+'%'
        btn.style.pointerEvents='none'
        btn.style.opacity='70%'
    }, time);
    setTimeout(() => {
        clearInterval(bar)
        var para = document.createElement("p");
    }, time*100);
    console.log(time)
})