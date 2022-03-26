const fs = require("fs");

// Синхронное чтение файла fs.readFileSync()
// Первый параметр, путь к файлу, второй, кодировка для чтения
// console.log(fs.readFileSync("./text.txt", "utf-8"));

// Ассинхронное чтение файла fs.readFile()
// Третий параметр, коллбек который будет выполнен после завершения чтения файла
// Первый параметр функции принимает ошибку, если есть
// Второй параметр, сами данные из файла
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//     console.log("Ассинхронное чтение файла")
//     if (err) {
//         throw err;
//     } else {
//         console.log("Read text file")
//         console.log(data)
//     }
// })

// // Ассинхронное чтение - выполнится после синхронного, так как данная функция не блокирует поток
// fs.readFile('hello.txt', 'utf8', function (error, data) {
//     console.log('Асинхронное чтение файла')
//     if (error) throw error // если возникла ошибка
//     console.log(data) // выводим считанные данные
// })

// // Ссинхронное чтение - выполнится первым, так как синхронная функция
// console.log('Синхронное чтение файла')
// let fileContent = fs.readFileSync('hello.txt', 'utf8')
// console.log(fileContent)


// Запись данных в файл - полная перезапись
// Синхронный вариант
// fs.writeFileSync("./text.txt", "Some text for write");

// Ассинхронный вариант, может принимать еще и коллбек функцию, которая будет выполнена после записи
// fs.writeFile("./text.txt", "Some text", (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log("Перезапись завершена")
//     console.log(fs.readFileSync("./text.txt", "utf-8"))
// })


// Для дозаписи в файл, применяется команда fs.appendFileSync() или fs.appendFile()
// fs.appendFileSync("./text.txt", "Some append text")

// fs.appendFile("./text.txt", "Add some text", (err) => {
//     if (err) {
//         throw err
//     }

//     console.log("Текст добавлен")
//     console.log(fs.readFileSync("./text.txt", "utf-8"))
// })


// Удаление файла fs.unlinkSync() и fs.unlink()
// fs.unlinkSync("./file.txt");

// fs.unlink("./file2.txt", (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log("Файл удален")
// })