// module.exports.SOME_NAME = value or something
// Экспорт переменной, функции, объекта и т.д.
// Позволяет экспортировать функционал
// const greeting = require('./greeting')
// Импорт модуля, для своих модулей нужно прописывать относительный путь
// Подключение через ключевое слово require

let currentDate = new Date()
module.exports.date = currentDate

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours()
    if (hour > 16) return 'Добрый вечер, ' + name
    else if (hour > 10) return 'Добрый день, ' + name
    else return 'Доброе утро, ' + name
}

module.exports.someMethod = (text) => {
    return `Ты напечатал ${text} из функции внешнего модуля`
}

module.exports.getRandomText = () => {
    let arrText = [
        "Text",
        "Some text",
        "Example",
        "Wow",
        "Array",
        "Text array",
        "Random",
        "SADQWFWGQG#QWGQF",
        "TEXT",
    ]
    let randomText = arrText[Math.floor(Math.random() * arrText.length)]
    console.log(randomText)
}