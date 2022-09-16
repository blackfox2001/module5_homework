const arr = [0, 2, true, 0, 0, 5, 8, 1, "React", 19, 14, "JavaScript", null]

let numNull = 0
let numEven = 0
let numOdd = 0

arr.forEach(element => {
    if (typeof(element) === "number" && !isNaN(element)){
        if (element === 0) numNull += 1
        else if (element % 2 === 0) numEven += 1
        else numOdd += 1
    }
});

console.log(`Количество нулей: ${numNull}`)
console.log(`Количество четных чисел: ${numEven}`)
console.log(`Количество нечетных чисел: ${numOdd}`)