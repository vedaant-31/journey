let arr= [
    {
    team:"MI",
    primary:"blue",
    secondary:"golden"
    },
    {
    team:"CSK",
    primary:"yellow",
    secondary:"blue"
    },
    {
    team:"RCB",
    primary:"red",
    secondary:"black"
    },
    {
    team:"KKR",
    primary:"purple",
    secondary:"golden"
    },
    {
    team:"DC",
    primary:"blue",
    secondary:"red"
    },
    {
    team:"SRH",
    primary:"orange",
    secondary:"black"
    },
    {
    team:"PBKS",
    primary:"red",
    secondary:"white"
    },
    {
    team:"RR",
    primary:"red",
    secondary:"blue"
    },
    {
    team:"GT",
    primary:"green",
    secondary:"blue"
    },
    {
    team:"LSG",
    primary:"orange",
    secondary:"brown"
    }
]

var btn = document.querySelector("button");
var div = document.querySelector("div");
var main = document.querySelector("main");
// var main = document.querySelector("#");

btn.addEventListener("click",function(){
    var winner= Math.floor(Math.random()*arr.length)
    div.innerHTML = (arr[winner].team)
    // console.log(`${arr[winner].secondary}`)
    main.style.backgroundColor=`${arr[winner].secondary}`
    div.style.backgroundColor=`${arr[winner].primary}`
})