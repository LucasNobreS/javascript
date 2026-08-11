let num = [5, 4, 3, 2, 1]


num.push(6)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let cont = 2
let pos = num.indexOf(cont)
if(pos == -1){
    console.log(`o valor não foi encontrado!`)
}else{
console.log(`o valor ${cont} esta na posição ${pos}`)
}