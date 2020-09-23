"use strict";

// Задача 1

alert("Программа для сравнения кол-ва вхождений символа в двух строках");

const firstRow = prompt("Введите первую строку: ", ""); // 'мама мыла раму';
const secondRow = prompt("Введите вторую строку: ", ""); // 'собака друг человека';
const char = prompt("Введите букву/символ для сравнения: ", "");

function getRow(firstRow, secondRow) {
  let firstCount = getCountChar(firstRow);
  let secondCount = getCountChar(secondRow);

  if (firstCount === 0 && secondCount === 0) {
    return 0;
  } else if (firstCount === secondCount) {
    return 1;
  }

  return firstCount > secondCount ? firstRow : secondRow;
}

function getCountChar(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }

  return count;
}

const result1 = getRow(firstRow, secondRow);
let resultStr = "";

if (result1 === 0) {
  resultStr += `К сожалению в обеих строках не найдено ни одного символа "${char}"`;
} else if (result1 === 1) {
  resultStr += `В обеих строках одинковое количество символов "${char}"`;
} else {
  resultStr += `В строке "${result1}" больше вхождений символа "${char}"`;
}

console.log(result1);
alert(resultStr);

// Задача 2

alert("Программа для форматирования телефонного номера");

const tel = prompt("Введите номер телефона: ", ""); // +71234567890 79211234567 89211234567 9211234567

function formattedPhone(phone) {
  let resultPhone = "+7 ";
  let firstSymbol = phone[0];

  switch (firstSymbol) {
    case "+":
      resultPhone += `(${phone[2]}${phone[3]}${phone[4]}) ${phone[5]}${phone[6]}${phone[7]}-${phone[8]}${phone[9]}-${phone[10]}${phone[11]}`;
      break;
    case "7":
    case "8":
      resultPhone += `(${phone[1]}${phone[2]}${phone[3]}) ${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}-${phone[9]}${phone[10]}`;
      break;
    case "9":
      resultPhone += `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}-${phone[8]}${phone[9]}`;
      break;
    default:
      resultPhone =
        "К сожалению вы ввели номер телефона в неправильном формате";
      break;
  }

  return resultPhone;
}

const result2 = formattedPhone(tel);

console.log(result2); // +7 (123) 456-78-90
alert(result2);
