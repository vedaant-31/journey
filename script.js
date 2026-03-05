var main = document.querySelector("main");
var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    var div = document.createElement("div");
    main.appendChild(div)
    var c1= Math.floor(Math.random()*256);
    var c2= Math.floor(Math.random()*256);
    var c3= Math.floor(Math.random()*256);
    var rotation = Math.floor(Math.random()*180);
    var x = Math.floor(Math.random()*90);
    var y = Math.floor(Math.random()*90);
    
    
    div.style.rotate = rotation+"deg"
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
    div.style.left= x+'%'
    div.style.top= y+'%'
})