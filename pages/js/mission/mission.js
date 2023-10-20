let slideIndex=0;

const slides = document.querySelectorAll(".slide");

function slideshow(){
slides.forEach(slide=> {
        slide.style.display="none";
        
    });
  
    slides[slideIndex].style.display="block";
}


function plusSlide(num){
 
    slideIndex+=num;
    if(slideIndex>=slides.length){
        slideIndex=0;
      
    }
    if(slideIndex<0){
        slideIndex=slides.length-1;
  
    }
    slideshow();
}


