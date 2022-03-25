let currentDate = new Date();

// Создание глобальной переменной
// Данная переменная будет видна во всех модулях
// Не рекомендуется использовать глобальные переменные
global.date = currentDate;

module.exports.getMessage = function () {
    let hour = currentDate.getHours();
    // global.name будет так же виден и доступен во всех модулях
    if (hour > 16) return 'Добрый вечер, ' + global.name;
    else if (hour > 10) return 'Добрый день, ' + name;
    else return 'Доброе утро, ' + name;
};