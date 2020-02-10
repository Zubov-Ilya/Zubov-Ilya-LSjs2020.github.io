/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i , this)
  }
}

Array.prototype.myEach = forEach;

a.forEach((e, i, arr) => {
  console.log(e, i, arr)
})

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */


function map (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i , this)
  }
}

Array.prototype.myMap = map;

a.map((e, i, arr) => {
  console.log(e * 2);
});


/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

Array.prototype.myReduce = reduce;

a.myReduce((e, i, arr) => {
  var current = arr[0];
  console.log(current)
});

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  for (var key in a) {
  console.log(key, ':', a[key].toUpperCase());
  };
};

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
