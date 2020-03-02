const rangeLeap = (start = 1, end = 2020) => {
    for (let x = start; x <= end; x++) {
        const isLeapYear = x % 4 === 0 && x % 100 !== 0 || x % 400 === 0
        console.log(`Tahun ${x} : ${ isLeapYear ? "kabisat" : "bukan kabisat" }`)
    }
}

rangeLeap(1900, 2020)