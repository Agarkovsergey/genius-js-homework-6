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
    this.a = +prompt('введіть перше число:', 0);
    this.b = +prompt('введіть друге число:', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
const calc = new Calculator();
calc.read();

// const p0 = document.createElement('p');
// const p1 = document.createElement('p');
// const p2 = document.createElement('p');

// p0.textContent = 'Перше та друге число: ' + calc.a + ' та ' + calc.b;
// output.appendChild(p0);
// p1.textContent = 'Сума: ' + calc.sum();
// output.appendChild(p1);
// p2.textContent = 'Добуток: ' + calc.mul();
// output.appendChild(p2);
['Перше та друге число: ' + calc.a + ' та ' + calc.b, 'Сума: ' + calc.sum(), 'Добуток: ' + calc.mul()].forEach(text => {
  const p = document.createElement('p');
  p.textContent = text;
  output.appendChild(p);
});
