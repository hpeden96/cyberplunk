function rollInit() {
    return Math.floor(Math.random() * (20 - 1) + 1)
}

//console.log(rollInit())

module.exports = { rollInit }