var mult1 = 3
var mult2 = 5
var multiples = []

function Counter(num, limit) {
    if (num < limit) {
        if (IsMultiple(num)) {
            multiples.push(num)
        }
        num++
        return Counter(num, limit)
    }
}

function IsMultiple(num) {
    if (num % mult1 == 0) {
        return true
    } else if (num % mult2 == 0) {
        return true
    } else {
        return false
    }
}

// function Sum(total, value) {
//     return total + value
// }
Counter(1,10)

console.log(multiples)
// console.log(multiples.reduce(Sum()))