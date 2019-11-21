function character(str, pos) {
    this.str = str;
    this.pos = pos;
    this.remove = () => {
        var newstr = this.str;
        var newpos = this.pos;
        return newstr.substring(0, newpos - 1) + newstr.substring(newpos, this.str.length)
    }
}
var string = new character('nhatle', 9);
console.log(string.remove());