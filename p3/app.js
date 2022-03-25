let nodePath = process.argv[0]
let appPath = process.argv[1]
let name = process.argv[2]
let age = process.argv[3]

let someMath = process.argv[4]

console.log('nodePath: ' + nodePath)
console.log('appPath: ' + appPath)
console.log()
console.log('name: ' + name)
console.log('age: ' + age)

console.log("Some math: " + someMath * 2);

// При запуске приложения через командную строку, мы можем дополнительно передавать
// параметры. Для получения доступа к параметрам, используется массив process.argv

// Первый элемент массива это путь к файлу node.exe, который вызывает приложение
// Второй элемент массива это путь к файлу приложения, которое выполняется

// В данном случае, мы третьим и четвертым элементом передаем имя и возраст