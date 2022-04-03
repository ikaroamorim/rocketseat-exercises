//Criar um Array que tenha as posiçoes de A-Z
//Minha soluçao
function retornaArrayElementosEnumerados(start, stop) {
   let startCode = start.charCodeAt(0)
   if (stop) {
      let stopCode = stop.charCodeAt(0)
      length = (stopCode - startCode) + 1
      return Array.from({ length }, (_, index) => String.fromCharCode(startCode + index))
   } else {
      return Array.from({ length: startCode + 1 }, (_, index) => String.fromCharCode(index))
   }
}

/*Soluçao do instrutor
function range(start, stop) {
   stop = stop === undefined ? start : stop
   start = start === stop ? 1 : start 

   let length = stop - start + 1

   const mapFn = (_, index) => start + index

   return Array.from({length}, mapFn)
}

const result = range(65, 90).map( n => String.fromCharCode(n))
console.log result
*/

console.log(retornaArrayElementosEnumerados('D'))
console.log(retornaArrayElementosEnumerados('A', 'Z'))