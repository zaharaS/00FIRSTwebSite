console.log('Hello')
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var string = 'Hello world';
var number = 1100;
var float = 11.00;
var object = {
    key: 'value',
    key2: 1,
    key3: [5, 4, 3]
}

//присвоение функции переменной
var fun = function(a, b){
    return a + b
}

//просто функция

function summ (a, b){
    return a + b
}

//стрелочная функция

minusArrow(a, b )=> {
    return a + b
}


// простая выводилка
var display = function(a)
{
    if (a){
        console.log(a)
    } else {
        console.log('нечего выводить...')
    }
}

//вызов функции в функциях
function minusAndDisplay (a, b){
    display(minusArrow(a, b))
}

//арифметические операции
var a = number + number
var b = number * 5
var c = number - 100
var d = number / 10

var e float + 10.50 + a

console.log(a, b, c, d, e)

//операции со строками
var f = string + 'чего?' + string
var g = string + 'огого' +  float


// замена подстроки
g = g.replace(string, 'Bye')
console.log(f, g)

//условный оператор
if (number == a){
    console.log('first number == a')
} else if (number == 1100) {
    alert('number equals:' + number)
} else {
    console.log ('we found nothing :(')
}
//скорее всего, выведет true console.log (a > b)

//циклы
while (c > 900) {
    console.log(c)
    c = c - 1 // c -= 1
}

//работа с массивом в цикле
for (var i = 0; i < array.lengh; i ++){
    array[i] += 10
}
// метод Array.map
array = array.map(e => e / 10)
console.log(array)

//конструкция switch
switch (string){
    case 'Hello':
    
    console.log('Hello')
        break
    case 'Hello world':

    console.log ('Hello world')
        break
        case 'Hello world':
        
    console.log ('Hello world')
        break
        default:
    console.log ('Nothing :(' )    
}