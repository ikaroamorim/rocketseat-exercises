//Criar um Array que tenha nas posiçoes os meses do ano

const result = Array.from({ length: 12 }, 
   (_, index) => new Date(0, index).toLocaleString('pt-BR', { month: 'long' }))

console.log(result)