let ground = document.querySelector('.ground')
const count = 724;
let colors = ['green','orange','red','blue','white']

for(let i = 0; i <= count;i++) {
    let box = document.createElement('div')
    box.classList.add('box')
    ground.append(box)
    
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))
    
}

function setColor(el) {
    el.style.background = randomColor()
}

function removeColor(el) {
    el.style.background = 'gray'
}


function randomColor() {
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}


// Деструктуризация

// let product = {
//     name: 'Молоко',
//     params: {
//         capacity: '1L',
//         fat: '2%',
//         model: 'Nestle',
//         city: 'Moscow'
//     }
// }

// let { capacity: ca, fat, model, city = 'Tashkent'  } = product.params

// console.log(ca);


/* let cars = ['bmw','mers','audi'];

let [ one, mers, two ] = cars

console.log(two); */


// spread оператор

// let bmw = {
//     name: 'bmw',
//     year: 2022
// }

// let malibu = {
//     ...bmw,
//     color: 'black'
// }

// malibu.name = 'malibu'

// console.log(bmw);
// console.log(malibu);


// let array1 = ['html','css','js']

// let array2 = ['vue','vuex','pinia']

// let newArray = [...array1, 'git', ...array2]

// console.log(newArray);


// rest оператор

// function solve(a,...rest) {
//     let sum = rest.reduce((acc, el) => acc + el)
//     return sum
// }

// console.log(solve(1,2,3,4,5));
