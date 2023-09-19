const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
if (isLoggedIn) {
    window.location.href = 'pages/home.html'
}

