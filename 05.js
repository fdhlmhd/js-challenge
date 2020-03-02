const array = [...Array(1001).keys()]

const odd = array.filter(x => x % 2 !== 0)
const even = array.filter(x => x % 2 === 0)
const mulFive = array.filter(x => x % 5 === 0)
const prime = array.filter(primeNumber)
const primeOne = array.filter(x => x < 100).filter(primeNumber)

function primeNumber(x) {
    if (x < 2) return false

    for (let y = 2; y < x; y++) {
        if (x % y === 0) return false
    }

    return true
}

console.log(odd)
console.log(even)
console.log(mulFive)
console.log(prime)
console.log(primeOne)