var mult1 = 3
var mult2 = 5
var multiples = []
var multiples3 = []
var multiples5 = []

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
        multiples3.push(num)
        if (num % mult2 == 0) {
            multiples5.push(num)
        }
        return true
    } else if (num % mult2 == 0) {
        multiples5.push(num)
        return true
    } else {
        return false
    }
}

function ShowResult() {
    multiples = []
    multiples3 = []
    multiples5 = []
    Counter(1, 100)

    let table = document.getElementById("tabla")
    table.innerHTML = ""

    let td1 = "<tr><td>"
    let td2 = "</td></tr>"

    multiples.forEach((item, index) => {
        let tr = table.appendChild(document.createElement("tr"))
        let mult3 = ''
        let mult5 = ''

        if (multiples3[index] !== undefined) {
            mult3 = multiples3[index]
        }
        if (multiples5[index] !== undefined) {
            mult5 = multiples5[index]
        }
        let line = td1 + (index + 1) + td2
            + td1 + item + td2
            + td1 + mult3 + td2
            + td1 + mult5 + td2
        tr.innerHTML = line
    })
}