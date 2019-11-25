window.addEventListener('load', function() {

    this.window.addEventListener('change', function() {
        var getExtention = () => {
            var filename = document.getElementById('filename').value;
            return filename.substring(filename.lastIndexOf('.') + 1);
        }

        alert('The Extention of filename :' + getExtention());
        console.log('The Extention of filename : ' + getExtention());
    })
})