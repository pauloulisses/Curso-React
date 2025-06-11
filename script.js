 // LET E CONST

// Declarando a variável 'a' no escopo global com valor 10
let a = 10;

// Declarando a variável 'b' no escopo global com valor 15
let b = 15;

// Verificando se 'b' é maior que 10
if (b > 10) {
    // Essa linha cria uma NOVA variável 'a' dentro do bloco do if
    // Essa 'a' só existe dentro dessas chaves { } (escopo de bloco)
    let a = 5;

    // Aqui, estamos imprimindo a 'a' do bloco, que vale 5
    console.log(a); // Saída: 5
}

// Aqui fora do if, estamos de volta ao escopo global
// A variável 'a' global ainda vale 10, porque a 'a' dentro do if era outra
console.log(a); // Saída: 10





// LOOP

// Declarando a variável 'i' no escopo global com valor 100
let i = 100;

// Criando um loop 'for' com uma nova variável 'i' LOCAL ao bloco do for
for (let i = 0; i < 5; i++) {
    // Aqui, 'i' é a do loop, que começa em 0 e vai até 4
    console.log(i); // Saída: 0 1 2 3 4
}

// Fora do loop, voltamos a usar a variável 'i' do escopo global (que vale 100)
console.log(i); // Saída: 100





// FUNCTION

function logName() {
    const name = "Paulo"; // 'name' aqui é local da função
    console.log(name);    // Imprime 'Paulo'
}

const name = "Ulisses";   // 'name' aqui está no escopo global

logName();                // Chama a função → imprime 'Paulo'
console.log(name);        // Fora da função → imprime 'Ulisses'


// ARROW FUNCTIONS

const sum = function sum(a, b){
    return a + b
}

const arrowSum = (a, b) => a + b


console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if(name) {
        return "Olá, " + name + "!"

    }else {
        return "Olá!"

    }
}

console.log(greeting("Paulo"))
console.log(greeting())


const user = {
    name: "Paulo",
    sayUserName() {
        setTimeout(function(){
            console.log(this)
            console.log("Username:" + this.name)
        }, 500)
    },
}

user.sayUserName()

// Filter - O filter é um método de array para filtrar dados, baseado em alguma
// condição que estabelecemos

// Isso nos dá um array com apenas os elementos que queremos de forma perfomatica

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
  if(n >= 3) {
    return n
  }
}) 

console.log(highNumbers)

const users = [
    {name: 'Paulo', avaliable: true},
    {name: 'Eberson', avaliable: false},
    {name: 'Eberson', avaliable: true},
]

const avaliableUsers = users.filter((user) => user.avaliable)


// MAP - É um método de array também, que percorre todos os elementos;
// Quando utilizamos Map, estamos querenedo modificar os dados do array

const produtos = [
    {name: 'Camisas', prince: 10.99, category: 'Roupa'},
    {name: 'Chaleira eletrica', prince: 49.99, category: 'Eletro'},
    {name: 'Fogão', prince: 400, category: 'Eletro'},
    {name: 'Calça jeans', prince: 50.99, category: 'Roupa'},

]

produtos.map((produto) => {
    if(produto.category === 'Roupas')
      produto.aVenda = true
})

console.log(produtos)