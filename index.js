// Поиск элемента по ID
let search = document.getElementById('search')
let butt = document.getElementById('button')

// 5.Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age.
//   При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве
let arr = [
    {name: 'Alex', age: 32},
    {name: 'Maksim', age: 38},
    {name: 'Vitold', age: 30},
    {name: 'Era', age: 33}
]

butt.addEventListener('click', () => {

    // 4.Если ввести в поиск слово google и нажать кнопку НАЙТИ,
    //     то нужно показать в алерте “Yandex круче. Но это не точно”

    if (search.value === 'google') {
        return alert('Yandex круче.Но это не точно')
    }

        // 5.При нажатии на кнопку НАЙТИ также вывести
    // ещё и св-во name первого объекта в массиве
    else if (search.value === '') {
        return alert(arr[0].name)
    }

        // 3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска.
    //     Не использовать onclick атрибут в разметке кода.
    else {
        alert(search.value)
    }
})

// 6.Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры

/*let superSum = (a, b) => {
    return alert(a + b)
}
superSum(5, 6)*/


// 7. Создать массив из чисел в перемешку (не отсортированы).
// С помощью цикла for найти максимальный и минимальный элементы в массиве

let array = [4, 9.34, -4, 5, 87, 34, -56]
let max = getMaxValue(array)
let min = getMinValue(array)
console.log('Максимальный элемент в массиве: ' + max)
console.log('Минимальный элемент в массиве: ' + min)

function getMaxValue(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i]
    }
    return max;
}

function getMinValue(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i]
    }
    return min;
}

// 8.Создать 2 переменные a и b… присвоить им любые значения.
// Потом программно поменять эти значения местами, не используя значения напрямую

let a = 'Hello'
let b = 'World'

let c = a
a = b
b = c

console.log(a) // то что было изначально в b
console.log(b) // то что было изначально в a

// 9.Оформить алгоритм поиска максимального числа в массиве как функцию findMax
// (чтобы можно было передавать в неё любой массив чисел,
// а на выходе она возвращала нам максимальное число из массива)
let array1 = [4, 9.34, -4, 5, 87, 34, -56, 100]

function findMax(arr) {
    return Math.max(...arr)
}

console.log(findMax(array1))

/*
 10.показать alert с результатом поиска не сразу, а через 3 секунды после нажатия
 (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)*/


/*butt.addEventListener('click', () => {
    if (search.value === 'google') {

 // С помощью метода setTimeout выставляем интервал в 3 сек.
        return setTimeout("alert('Yandex круче.Но это не точно')", 3000)
    }
    else if (search.value === '') {
        return alert(arr[0].name)
    } else {
        alert(search.value)

    }
})*/




