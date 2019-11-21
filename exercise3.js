window.addEventListener('load', function() {
    var getCurrentURL = () => {
        return window.location.href;
    }
    alert('Current page is ' + getCurrentURL());
    console.log('Current page is ' + getCurrentURL());

})