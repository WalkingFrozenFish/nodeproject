// Подключение модуля событий
const Emitter = require('events')
let emitter = new Emitter()

// Название события
let eventName = 'greet'

// С помощью .on() мы связываем некоторое событие и функцию обработчик
// В данном случае для события 'greet' мы делаем две функции обработчика

// Первый параметр, название события, второй параметр функция обработчик
emitter.on(eventName, function () {
    console.log('Hello all!')
})

emitter.on(eventName, function () {
    console.log('Привет!')
})

// Для генерации события, и вызова всех обработчиков которые связаны с этим событием
// используется команда emitter.emit(), куда передается название события
emitter.emit(eventName)


// --------------------------------------------------------
let random = Math.floor(Math.random() * (10 - 0 + 1) + 0)

emitter.on("first", (num) => {
    console.log(`First event and random number - ${num}`);
})

emitter.on("second", (num) => {
    console.log(`Second event and random number - ${num}`);
})

if (random < 5) {
    // При вызове события можно передать дополнительный параметр, который будет передан в функцию обработчик
    emitter.emit("first", random)
} else {
    emitter.emit("second", random)
}
// --------------------------------------------------------