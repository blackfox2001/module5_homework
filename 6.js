arr = [1, 1, 0, 1, 1, 0]

let elem = arr[0]

for (let i = 1; i < arr.length; i++) {
    if (elem !== arr[i]) {
        elem = arr[i]
        console.log(false)
        break
    }
}

if (elem === arr[0]) console.log(true)