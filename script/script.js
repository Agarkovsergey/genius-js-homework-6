// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.
let output = document.getElementById('output');

function Calculator() {
  this.read = function () {
    a = +prompt('введіть перше число:', 0);
    b = +prompt('введіть друге число:', 0);
    return a, b;
  };
  this.sum = function () {
    return a + b;
  };
  this.mul = function () {
    return a * b;
  };
}
const calc = new Calculator();
calc.read();

const p0 = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
p0.textContent = 'Перше та друге число: ' + a + ' та ' + b;
output.appendChild(p0);
p1.textContent = 'Сума: ' + calc.sum();
output.appendChild(p1);
p2.textContent = 'Добуток: ' + calc.mul();
output.appendChild(p2);
