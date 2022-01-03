module.exports = function reverse (n) {
    while (n % 10 === 0){
        n = Math.trunc(n / 10);
        }
        let numberStr = Math.abs(n).toString();
        let arr = numberStr.split("").reverse().join("")
        return +arr;
}
