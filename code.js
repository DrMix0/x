// №1. Подсчёт очков


let scores = {
    "Алекс": 0,
    "Ирина": 0,
    "Михаил": 0,
    "Елена": 0
};

// Функция для увеличения счета игрока
function increaseScore(playerName, points) {
    // Проверяем, существует ли игрок с таким именем в объекте
    if (scores.hasOwnProperty(playerName)) {
        scores[playerName] += points; // Увеличиваем счет игрока на заданное количество очков
    } else {
        console.log("Игрок с таким именем не найден.");
    }
}

// Пример использования функции
increaseScore("Алекс", 10); // Алекс набрал 10 очков
increaseScore("Ирина", 5); // Ирина набрала 5 очков

console.log(scores); // Выведет обновленный счет

// №2. Вглубь обьектов и массивов


myCrazyObject["some array"][2].number;


//№1. Прекрасные животные


var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

for (var i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + " - прекрасное животное";
}

console.log(animals);

["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное", "Комодский варан - прекрасное животное"]


//#2. Генератор случайных строк


// Строка с буквами алфавита
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

// Пустая строка, куда будет добавляться случайный результат
var randomString = "";

// Пока длина строки меньше 6, добавляем случайные символы
while (randomString.length < 6) {
    // Генерируем случайный индекс
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    // Добавляем случайный символ к строке
    randomString += alphabet[randomIndex];
}

// Выводим результат в консоль
console.log(randomString);

// h4k3r sp34k
// Исходная строка
var input = "javascript is awesome";
// Пустая строка для результата
var output = "";

// Проходим по каждому символу строки
for (var i = 0; i < input.length; i++) {
    // Получаем текущий символ
    var char = input[i];
    // Проверяем, нужно ли заменить символ
    if (char === 'a') {
        output += '4';
    } else if (char === 'e') {
        output += '3';
    } else if (char === 'i') {
        output += '1';
    } else if (char === 'o') {
        output += '0';
    } else {
        // Если символ не требует замены, добавляем его как есть
        output += char;
    }
}

// Выводим результат в консоль
console.log(output);

//j4v4scr1pt 1s 4w3s0m3


//№1. Математические расчеты и функции


// Создаем функции add и multiply
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Вычисляем выражение с помощью этих функций
let result = add(multiply(36325, 9824), 777);
console.log(result); // Результат выражения


//№2. Совпадают ли массивы?


// Функция для проверки одинаковости массивов
function areArraysSame(array1, array2) {
    // Если длины массивов разные, сразу возвращаем false
    if (array1.length !== array2.length) {
        return false;
    }

    // Перебираем элементы массивов и сравниваем
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false; // Если нашли несоответствие, возвращаем false
        }
    }

    // Если дошли до сюда, массивы одинаковые
    return true;
}

// Тестируем функцию
console.log(areArraysSame([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); // false

