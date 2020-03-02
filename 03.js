//Versi pertama
const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

const [headers, ...items] = csv.split("\n")
const titles = headers.toLowerCase().split(", ")

items.map(x => {
    const value = x.split(", ")
    const obj = {  }

    titles.forEach((v, i) => {
        if (v == "price") obj[v] = parseInt(value[i])
        else obj[v] = value[i]
    })

    return obj
}).sort((x, y) => {
    if (x.price < y.price) return -1
    if (x.price > y.price) return 1
    return 0
}).map(x => {
    return {
        ...x,
        price: Intl.NumberFormat("id", { style: "currency", currency: "IDR" }).format(x.price)
    }
}).forEach(x => console.log(x))

//Versi kedua
const fs = require('fs')
fs.readFile("json.csv", (error, data) => {
    const csv = String(data)

    const [headers, ...items] = csv.split("\n")
    const titles = headers.toLowerCase().split(", ")

    items.map(x => {
        const value = x.split(", ")
        const obj = {  }

        titles.forEach((v, i) => {
            if (v == "price") obj[v] = parseInt(value[i])
            else obj[v] = value[i]
        })

        return obj
    }).sort((x, y) => {
        if (x.price < y.price) return -1
        if (x.price > y.price) return 1
        return 0
    }).map(x => {
        return {
            ...x,
            price: Intl.NumberFormat("id", { style: "currency", currency: "IDR" }).format(x.price)
        }
    }).forEach(x => console.log(x))
})