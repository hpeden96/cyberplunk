class Enemy {

    constructor(name, hp, minAttackStat, maxAttackStat, isDead) {
        this.name = name;
        this.hp = hp;
        this.minAttackStat = minAttackStat;
        this.maxAttackStat =  maxAttackStat;
        this.isDead = isDead;
    }

    attack(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    getName() {
        return this.name
    }

    getCurrentHealth() {
        return this.hp
    }

    takeDmg(dmg) {
        this.hp -= dmg

        if(this.hp <= 0) {
            this.isDead = true
        }
        else {
            this.isDead = false
        }
    }
    
    //displayStats() {
    //    this.takeDmg(20)
    //    console.log(this.name + "\nHP: " + this.hp + "\n" + this.attack(this.minAttackStat, this.maxAttackStat) + "\nisDead: " + this.isDead)
    //}
}

//let drone1 = new Enemy("Drone", 10, 1, 10)

//drone1.displayStats()

module.exports = { Enemy: Enemy }