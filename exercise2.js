function Temp(c, f) {
    this.f = f;
    this.c = c;
    this.convertC = () => {
        return (this.f - 32) * (5 / 9);
    }
    this.convertF = () => {
        return (this.c * (9 / 5) + 32);
    }

}
var temps = new Temp(60, 45)
console.log(temps.c + ' C is ' + temps.convertF() + ' F');
console.log(temps.f + ' F is ' + temps.convertC() + ' C');