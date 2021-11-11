
//isSkillOrCombat 1 - skill, 0 - combat
isSkillOrCombat: 1}or

randEnc1 = { name:"Gang Members Attack", description:"You've being jumped by gansters.  Roll initiative!" , 
                    isSkillOrCombat:0, enemyName: "Gansters", hp:50, minAttack: 10, maxAttack: 20}

randEnc2 = { name:"Sneaking Past Guards", description:"You turn around the corner and see guards blocking your path. Sneak past to get by.", 
                    DC: 10, 
                    passOutcome:"You pass the guards without them spotting you.", 
                    failOutcom:"You have been spotted! You got by with some bullet hole in ya.  Everyone takes some damage.", 
                    dmg: 10, isSkillOrCombat: 1}

randEnc3 = { name:"Save The Kids!", description:"You see a group of kids being chased by a swarm of rats.  You jump into action to save them.  Roll initiative!",
                    isSkillOrCombat: 0, enemyName: "Rat Swarm", hp:20, minAttack:5, maxAttack: 10}

randEnc4 = { name:"Cybernetic Thieves!", description: "You're being jumped by a bunch of low-lives who want to steal your cybernetic implants. Roll Initiative!", 
                    isSkillOrCombat: 0, enemyName: "Cybernetic Theives", hp: 30, minAttack: 10, maxAttack: 25}

randEnc5 = { name:"Drones!", description:"A swarm of exploding drones flys by and begin to dive bomb you.  Run and doge to get away and not die.",
                    DC: 12, 
                    passOutcome: "You doge all the drones and got away with no harm",
                    failOutcom: "The party have been hit by a few drones.  You guys look a little banged up.",
                    dmg: 25, isSkillOrCombat: 1}

randEnc6 = { name:"Looting from cars", description: "You walk past a car that looks like it has something shiny inside.  Break in and take what's inside without setting off alarms.", 
                    DC: 15,
                    passOutcome:"You break in with no problem and find a medkit.  The party heals 10 health.",
                    failOutcom: "You set off the car alarm and you run with no item in hand",
                    isSkillOrCombat: 1
                }

randomEncounters = [ randEnc1, randEnc2, randEnc3, randEnc4, randEnc5, randEnc6 ]

function randEncounter(randomEncounters) {
    randEncRoll = Math.floor(Math.random() * (randomEncounters.length))
    return randomEncounters[randEncRoll]
}

module.exports = { randEncounter }
