
//isSkillOrCombat 1 - skill, 0 - combat

randEnc1 = { name:"Gang Members Attack", description:"You've been jumped by fucking gansters.  Roll initiative and don't get clapped!" , DC: null, isSkillOrCombat:0}
randEnc2 = { name:"Sneak Time!", description:"You turn around the corner and guards blocking your path. Sneak past to get by.", DC: 10, 
passOutcome:"You pass the guards with them spotting you.", failOutcom:"You have been spotted! You got by with some bullet hole in ya.  Every takes some damage.",
isSkillOrCombat: 1}


//randEnc1 = { name:"Encouter 01", description:"An old woman wearing a VR visor bumps into the party" }

encounters = [ randEnc1, randEnc2 ]

function randEncounter() {
    randEncRoll = Math.floor(Math.random() * (encounters.length))
    return encounters[randEncRoll]
}

module.exports = { randEncounter }
