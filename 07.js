const data = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`

console.log()

const check = (x) => {
    return console.log(x, data.match(new RegExp(`\\b${x}\\b`, 'gi')).length)
}

check("aku")
check('ingin')
check("dapat")