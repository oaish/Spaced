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