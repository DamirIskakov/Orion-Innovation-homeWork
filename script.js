// 1) Реализовать такую конструкцию, sum(3)(4), 
// которая бы возвращала сумму чисел. 
// Именно для двух скобок

// 2) Самостоятельно, не гугля аналоги, написать 
// функцию копирования объекта со всеми вложениями. 
// Вложены могут быть как объекты, так и массивы. 
// Должен возвращаться новый объект, у свойств которого 
// не будет зависимости от входящего объекта.


// 1
function sum(a) {
    
    let actualSum = a; //текущая sum

    function sum1(b) {
        actualSum += b; // функция f суммирует свой же аргумент
        return sum1; // и возвращает себя же
    }

    sum1.toString = function() { // возвращает строку из функции
        return actualSum;
    };

    return sum1;
}



// 2
let a = {
    str: 'Damir',
    number: 28,
    massiv: ['Volsvagen', 2017],
    obg: {key: 'A'}    
};

let b = JSON.parse(JSON.stringify(a)); // JSON.parse создаст новый обьект; JSON. stringify приводит объект man в строку 

b.obg.key = 'BC'; // меняется только в b(новом объекте)

console.log(a); 
console.log(b);
