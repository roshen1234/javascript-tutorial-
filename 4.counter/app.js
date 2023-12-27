const btn=document.querySelectorAll(".btn");
// const btn2=document.querySelector(".reset");
// const btn3=document.querySelector(".increase");
let v,h;
v=document.querySelector("#value");
let count=0;
btn[0].addEventListener("click",()=>{
     
    count--;
    v.textContent=count;
    if(count>0)
    {
        v.style.color="green";
    }
    else if(count<0)
    {
        v.style.color="red";
    }
    else
    {
        v.style.color="black";
    }
   
})

btn[1].addEventListener("click",()=>{
     
    count=0;
    v.textContent=count;

    if(count>0)
    {
        v.style.color="green";
    }
    else if(count<0)
    {
        v.style.color="red";
    }
    else
    {
        v.style.color="black";
    }

   
    
})

btn[2].addEventListener("click",()=>{
    count++;
    v.textContent=count;

    if(count>0)
    {
        v.style.color="green";
    }
    else if(count<0)
    {
        v.style.color="red";
    }
    else
    {
        v.style.color="black";
    }

    
    
})



// or

// // set inital value to zero
// let count = 0;
// // select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });
