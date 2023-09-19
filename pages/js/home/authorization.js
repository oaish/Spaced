const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
if (!isLoggedIn) {
    window.location.href = '../../../index.html'
}
else {
    // alert("Welcome")
}