//Criar um Array que tenha nas posiçoes os meses do ano

const result = Array.from({ length: 7 }, 
   (_, index) => new Date(0, 0, index).toLocaleString('pt-BR', { weekday: 'long' }))

console.log(result)