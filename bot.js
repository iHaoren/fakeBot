const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0
let dataUser = {}

const botSay = (data = {}) => {
    return [
        `Halo, perkenalkan nama saya RoenBot, siapa nama kamu?`,
        `Halo ${data.nama}, berapa usia kamu?`,
        `Oohh ${data.usia}, hobi kamu apa?`,
        `Wahhh... sama dong hobi aku juga ${data.hobi}, btw impian terbesarmu apa?`,
        `Ohh ${data.impian}... keren banget, aku doain kamu sukses selalu 😁. Udahan ya`
    ]
}

pertanyaan.innerHTML = botSay()[0]

function botStart() {
    init++
    if (init === 1) {
        dataUser.nama = jawaban.value
        botDelay()
    } else if (init === 2) {
        dataUser.usia = jawaban.value
        botDelay()
    } else if (init === 3) {
        dataUser.hobi = jawaban.value
        botDelay()
    } else if (init === 4) {
        dataUser.impian = jawaban.value
        botDelay()
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
    jawaban.value = ""
}

function botDelay() {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(dataUser)[init]
    }, 1000)
}

function finishing() {
    pertanyaan.innerHTML = "Terima kasih sudah ngobrol! 😊"
}

function botEnd() {
    pertanyaan.innerHTML = "Sesi selesai."
}