//Criar uma funçao que recebe 1 ou 2 argumentos 
// Quando receber um vai de zero até o argumento
// Quando receber 2 vai de um até o outro

//Minha soluçao
function retornaArrayElementosEnumerados(start, stop) {
   if (stop) {
      length = (stop - start) + 1
      return Array.from({ length }, (_, index) => start + index)
   } else {
      return Array.from({ length: start + 1 }, (_, index) => index)
   }
}

/*Soluçao do instrutor
function range(start, stop) {
   stop = stop === undefined ? start : stop
   start = start === stop ? 1 : start 

   let length = stop - start + 1

   const mapFn = (_, index) => start + index

   const result = Array.from({length}, mapFn)
}
*/

console.log(retornaArrayElementosEnumerados(10))
console.log(retornaArrayElementosEnumerados(5, 10))