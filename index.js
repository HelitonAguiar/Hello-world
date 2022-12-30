console.log('hello world !')

//================= Primary types ===================== //
//================= Number ============================ //

const age = 28
const price = 50.50
const sum = 2.5 + 3
const sub = 3 - 2
const multp = 4*4
const div = 4/4
console.log(
    {
        age,
        price,
        sum,
        sub,
        multp,
        div
    }
)

// ===================== text ========================== //
// ===================== string ======================== //

const name = 'Heliton' + ' ' + 'Aguiar'
const completeName = ` name = ${name}`

console.log({name,completeName})

// ==================== boolean ======================== //

const isRock = true
console.log({christian:!isRock})

// ==================== special types ================== //
// ==================== array ========================== //

const cars = [
    {
        modelo: 'cruze',
        ano: 2020
    },
    {
        modelo: 'onix',
        ano: 2018,
    },
    {
        modelo: 'marea',
        ano: 1995,
    },
    {
        modelo: 'opala',
        ano: 1970,
    },  
]

console.log(cars)

// ==================== object ======================= //

const person = {
    name: 'Heliton',
    cpf: 123456789,
    cars: cars
}

console.log(person)

// ================= functions ======================= //

function click(clicks){
    console.log('clicked' + clicks)
}

let clicks = 1
click(clicks);
const execute = click
console.log(execute);

const latir = ()=>{
    console.log("AOoooo !")
}

latir()

// ==================== Training =========================== //

const games = [
    {game: 'Final Fantasy 7'},
    {game: 'Suikoden'},
    {game: 'The Legend of Dragoon'},
    {game: 'Xenogears'},
    {game: 'The Legend of Legaia'},
    {game: 'The Last of Us'}
]

const select = ()=> {
    entry = 0;

    if (entry >= 0 && entry <= 5){
        console.log('O game escolhido foi: ', games[entry])
    }
    else{
        console.log('Entre com um número inteiro de 1 à 6 seu oridnário !!!!!')
    }
}

select();