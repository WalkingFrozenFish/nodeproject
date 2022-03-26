// Потоки для записи и чтения
// Создание потока записи fs.createWriteStream()
// Создание потока чтения fs.createReadStream()

// Если файла для записи не существует, то будет создан файл, и будет запись
// Для окончания записи используется команда .end()

const fs = require("fs");

let writeFile = fs.createWriteStream("text.txt");

writeFile.write("Some text 1\n");
writeFile.write("Some text 2\n");
writeFile.write("Some text 3\n");
writeFile.write("Some text 4\n");
writeFile.write("Some text 5\n");

writeFile.end("123");

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data)
//     }
// })

let readFile = fs.createReadStream("./text.txt", "utf-8")
readFile.on("data", (chunk) => {
    console.log(chunk)
})



function getCicleFile() {
    let cicle = fs.createWriteStream("cicle.txt");

    cicle.write("Start cicle\n")

    for (let i = 0; i < 50; i++) {
        cicle.write(`Number cicle - ${i}\n`)
    }

    cicle.end("End cicle\n")
}
getCicleFile()