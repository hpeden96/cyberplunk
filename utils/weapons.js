startingWeapon = { name: "Pipe Wrench", min: 5, max: 10}

weapon01 = { name: "Katana", min: 10, max: 15}

weapon02 = { name: "LIZZIE(Desert Eagle)", min: 14, max: 17}

weapon03 = { name: "Headsman Shotgun", min: 18, max: 23 }

weapon04 = { name: "OVERWATCH Sniper", min: 40, max: 55}

randWeapons = [ weapon01, weapon02, weapon03, weapon04 ]

function randLoot() {
    rand = Math.floor(Math.random() * (randWeapons.length))
    return randWeapons[rand]
}

function getStartingWeapon() {
    return startingWeapon    
}

module.exports = { randLoot, getStartingWeapon}