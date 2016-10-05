

function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor((Math.random() * 100) + 1);
}

Warrior.prototype.fight = function (opponent) {
    return this.name + " rushes to the arena with " + opponent.name;
}

Warrior.prototype.faceoff = function (opponent) {
    if (this.power > opponent.power) {
            return this.name + " wins!";
        }
        else {
            return opponent.name + " wins!";
        }
}

var warrior1 = new Warrior("Eve", "F");
var warrior2 = new Warrior("Johny", "M");
var warrior3 = new Warrior("Gabrielle", "F");

var johnyFight = warrior1.fight(warrior2);
var johnyFaceoff = warrior1.faceoff(warrior2);
console.log(johnyFight);
console.log(johnyFaceoff);


