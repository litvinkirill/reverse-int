module.exports = function reverse (n) {
    let m = Math.abs(n); // возмем модуль числа (избавимся от "-"" если он будет)
    let str = m.toString(); // превратим число в строку
    let stra = str.split(''); // разделим строку на элементы
    let strRev = stra.reverse(); // перевернем элементы строки
    let stringRev = strRev.join(''); // склеим элементы строки
    let numberReversed = parseInt(stringRev); // превратим строку в число
    return numberReversed;
}
