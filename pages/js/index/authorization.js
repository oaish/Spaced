const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
if (isLoggedIn) {
    window.location.href = '../../home.html'
}
