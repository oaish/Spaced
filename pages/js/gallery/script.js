// scientist scroll js
const scrollContainer = document.querySelector(".scroll")
const leftScrollBtn = document.querySelector("#left-scroll-btn")
const rightScrollBtn = document.querySelector("#right-scroll-btn")
const max = scrollContainer.scrollWidth;

leftScrollBtn.style.display = "none"

function handleScrollLeft() {
   if (scrollContainer.scrollLeft > 0) {
      scrollContainer.scrollLeft -= max
      rightScrollBtn.style.display = "block"
      leftScrollBtn.style.display = "none"
   }
   console.log(scrollContainer.scrollLeft, scrollContainer.scrollWidth);
}

function handleScrollRight() {
   if (scrollContainer.scrollLeft < max) {
      scrollContainer.scrollLeft += max
      rightScrollBtn.style.display = "none"
      leftScrollBtn.style.display = "block"
   }
   console.log(scrollContainer.scrollLeft, scrollContainer.scrollWidth);
}

const scrollContainer2 = document.querySelector(".scroll2")
const leftScrollBtn2 = document.querySelector("#left-scroll-btn2")
const rightScrollBtn2 = document.querySelector("#right-scroll-btn2")
const max2 = scrollContainer2.scrollWidth;

leftScrollBtn2.style.display = "none"

function handleScrollLeft2() {
   if (scrollContainer2.scrollLeft > 0) {
      scrollContainer2.scrollLeft -= max2
      rightScrollBtn2.style.display = "block"
      leftScrollBtn2.style.display = "none"
   }
   console.log(scrollContainer2.scrollLeft, scrollContainer2.scrollWidth);
}

function handleScrollRight2() {
   if (scrollContainer2.scrollLeft < max2) {
      scrollContainer2.scrollLeft += max2
      rightScrollBtn2.style.display = "none"
      leftScrollBtn2.style.display = "block"
   }
   console.log(scrollContainer2.scrollLeft, scrollContainer2.scrollWidth);
}

//menu js
var a;
function menu_show(){
   menustatus = parseInt(document.getElementById("menuStatus").value);
   
   if(menustatus){
      document.getElementById("allmenus").style.display= "none";
      document.getElementById("menuStatus").value = 0;
   }else{
   
      document.getElementById("allmenus").style.display= "inline";
      document.getElementById("menuStatus").value = 1;
   }
   
}

window.onload = function(e){ 
   document.getElementById("allmenus").style.display= "none";
}


//Satellite js
function fullView(ImgLink){
   document.body.style.overflow = "hidden"
   document.getElementById("FullImage").src = ImgLink;
   document.getElementById("FullImageView").style.display = "block";
   console.log("full view")
 }

 function closeFullView(){
   document.getElementById("FullImageView").style.display = "none";
   document.body.style.overflow = "auto"
 }

