//Criar um array [1, 2, 3 , 4, 5 , 6]


//Array.from(Iterable ou Array-like, mapFn)
const result = Array.from({length: 6}, (item, index) => index +1)

console.log(result.length)
console.log(result)