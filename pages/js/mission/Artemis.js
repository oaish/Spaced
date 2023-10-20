const slides = document.querySelectorAll(".slide");
const factslides= document.querySelectorAll(".factslide");
slideIndex=0;
factIndex=0;


function show(){
  factslides.forEach(factslide=> {
    factslide.style.display="none";
    
});

factslides[factIndex].style.display="grid";
}



function slidefact(num){
  factIndex+=num;
  if(factIndex>=factslides.length){
    factIndex=0;
  }
  if(factIndex<0){
  factIndex=factslides.length-1
  }
  console.log("factIndex");
  show();
  }




setInterval(() => {
   showSlide()
   slideIndex++;
   if (slideIndex >= slides.length) slideIndex = 0
 },2500)




 function showSlide(){
    slides.forEach(slide => {
        slide.style.display = "none";
    })
    slides[slideIndex].style.display = "block";
 }


 

 function filter(){
   var input,filter,a,i,txtValue;
   input= document.getElementById("myinput");
   filter = input.value.toUpperCase();
   console.log(filter);
   a = document.getElementsByClassName("anchor");
   for (i = 0; i < a.length; i++) {
     txtValue = a[i].textContent || a[i].innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       a[i].style.display = "block";
       console.log(a[i]);
     } else {
       a[i].style.display = "none";
       console.log("false");
     }
   }
 }


 