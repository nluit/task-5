window.addEventListener('load', function() {
    var btn = this.document.getElementById('btn');

    btn.addEventListener('click', async function() {

        var pos = document.getElementById('pos').value;
        var str = document.getElementById('str').value;
        var newstr = str;
        var newpos = pos;
        var result = newstr.substring(0, newpos - 1) + newstr.substring(newpos, str.length)
        console.log(result);
    })
})