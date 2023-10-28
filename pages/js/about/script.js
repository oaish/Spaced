// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;

  
}

let myBtn = document.getElementById("myb") ;
 
    myBtn.onclick= function goBack() {
      if (window.history.length > 1) {
          window.history.back();
      } else {
          // Handle no history available
          alert("No previous page to go back to.");
      }
  }