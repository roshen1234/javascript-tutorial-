const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
const randomnumber=getRandomNumber();
document.body.style.backgroundColor=colors[randomnumber];
color.innerText=colors[randomnumber];
//either we can give innerText or textContent both are same color.textContent=colors[randomnumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
    //here we are multiply math.random with colors.length because math.roandom only gives us number between 0 an 1 not including 1 that is numbers like 0.1222 like that but in our arry there is 4 elemnts so to reach there we multiply with colors.lenghth and since the value we get will be like for example 3.67777 to make it integer we give math.floor it round off the number to nearest integer  
}