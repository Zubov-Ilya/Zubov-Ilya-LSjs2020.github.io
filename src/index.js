/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
  for ( let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  };
};

const eachTest = (e, i, arr) => {
  console.log(e, i, arr)
};
forEach([1,3,5,7], eachTest)

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */

function map(array, fn) {
  for ( let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  };
};

const mapTest = (e) => {
  console.log(e)
};


/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial = 0) {
  for ( let i = 0; i < array.length; i++) {
    fn(array[i], i, array)
  };
};

const reduceTest = (accum = array[0], currentValue) => {
  accum = accum + currentValue;
  console.log(accum)
};

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
