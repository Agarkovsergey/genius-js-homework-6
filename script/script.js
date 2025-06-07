// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім * я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

let output = document.getElementById('output');
class Abonent {
  constructor(opt) {
    this.name = opt.name;
    this.phoneNumber = opt.phoneNumber;
  }
  get info() {
    return `Ім'я: ${this.name}, Телефон: ${this.phoneNumber}`;
  }
}
class PhoneBook {
  constructor() {
    this.abonents = new Set();
  }

  set addAbonent(abonent) {
    this.abonents.add(abonent);
  }

  get list() {
    return Array.from(this.abonents);
  }
}
const phoneBook = new PhoneBook();

const ivan = new Abonent({
  name: 'Ivan',
  phoneNumber: 3801234567,
});
const alex = new Abonent({
  name: 'Alex',
  phoneNumber: 3801235467,
});
const olga = new Abonent({
  name: 'Olga',
  phoneNumber: 3801235489,
});

phoneBook.addAbonent = new Abonent(ivan);
phoneBook.addAbonent = new Abonent(alex);
phoneBook.addAbonent = new Abonent(olga);

for (const abonent of phoneBook.list) {
  const p = document.createElement('p');
  p.textContent = abonent.info;
  output.appendChild(p);
}
