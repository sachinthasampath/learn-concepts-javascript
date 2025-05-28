class Entity {
  constructor(name) {
    this.name = name;
  }
}

const mover = {
  move() {
    console.log(`${this.name} moves.`);
  },
};

const attacker = {
  attack(targetEntity) {
    console.log(`${this.name} attacks ${targetEntity.name}.`);
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage and has ${this.health} health left.`);
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated.`);
    }
  },
};

class Character extends Entity {
  constructor(name, attackDamage, health) {
    super(name);
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
  constructor(name, health) {
    super(name);
    this.health = health;
  }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name);
    this.attackDamage = attackDamage;
  }
}
Object.assign(Turret.prototype, attacker);

const turret = new Turret("Turret", 10);
const character = new Character("Hero", 20, 100);
const wall = new Wall("Wall", 100);

turret.attack(character);
character.move();
character.attack(wall);
