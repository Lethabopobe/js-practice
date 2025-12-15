document.getElementById("btn1").addEventListener("click",function
(){
document.getElementById("title").textContent= "Hello Lethabo Mokoape!" ;
document.getElementById("title").style.font="30px";
}
);
document.getElementById("btn2").addEventListener("click",function(){
document.querySelector("body").style.backgroundColor="blue";

});
document.getElementById("btn3").addEventListener("click",function(){
if (document.getElementById("info").style.display==="none"){
    document.getElementById("info").style.display="block"
     document.getElementById("info").textContent="This is some information."
}
else{ 
document.getElementById("info").style.display="none"
}}
);
document.getElementById("btn4").addEventListener("click",function(){
document.querySelectorAll(".heading").forEach(heading=>{  
  heading.style.color="green"  
})
})
let counter=0;
document.getElementById("btn5").addEventListener("click",function(){
    counter=counter+1
document.getElementById("count").textContent=counter
})
document.getElementById("btn6").addEventListener("click",function(){
     counter=counter-1
document.getElementById("count").textContent=counter
})
document.getElementById("right").addEventListener("click",function(){
    document.getElementById("result").textContent="correct"
   document.getElementById("result").style.color="green"
   counter=counter+1
   if(counter>1){
    counter=counter-1
  }
  document.getElementById("score").textContent=counter
  
}
)
document.getElementById("wrong").addEventListener("click",function(){
document.getElementById("result").textContent="incorrect"
document.getElementById("result").style.color="red"
document.getElementById("result").style.color="red"
counter=counter-1
document.getElementById("score").textContent=counter
})
document.getElementById("wrong2").addEventListener("click",function(){
document.getElementById("result").textContent="incorrect"
document.getElementById("result").style.color="red"
counter=counter-1
document.getElementById("score").textContent=counter
})