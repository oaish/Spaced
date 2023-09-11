const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
if (!isLoggedIn) {
    console.log(isLoggedIn);
    window.location.href = '../index.html'
}
else {
    // alert("Welcome")
}