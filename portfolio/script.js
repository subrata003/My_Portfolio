document.addEventListener("DOMContentLoaded", function() {
     var smoothDiv = document.querySelector('.smooth-entry');
     smoothDiv.classList.add('show'); // Add the 'show' class to trigger the smooth entry
  });
//  let pic=document.querySelector(".fast-pro-pic")  ;
//  let hover=document.querySelector(".view2")
//  pic.addEventListener("mouseover",()=>{
//    hover.style.opacity= "1";
// })
 
//nav bar
const bar = document.querySelector(".bar")
const navbar = document.querySelector(".sidebar")
const close = document.querySelector("#close")
if (bar) {


     bar.addEventListener("click", () => {
      console.log("hellow");
          navbar.classList.add("active")
     })
}
if (close) {


     close.addEventListener("click", () => {
          navbar.classList.remove("active")
     })
}