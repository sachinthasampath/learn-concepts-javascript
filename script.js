class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
  move() {
    console.log(`${this.name} moves.`);
  }
  attach(targetEntity) {
    console.log(`${this.name} attacks ${targetEntity.name} for ${this.attackDamage} damage.`);
    targetEntity.takeDamager(this.attackDamage);
  }
  takeDamager(damage) {
    this.health -= damage;
    console.log(`${this.name} takes ${damage} damage and has ${this.health} health left.`);
    if (this.health <= 0) {
      console.log(`${this.name} has been defeated.`);
    }
  }
}

class Character extends Entity {}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }
  move() {
    return null;
  }
  attach() {
    return null;
  }
}

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage);
  }
  move() {
    return null;
  }
  takeDamager() {
    return null;
  }
}

const turret = new Turret("Turret", 10);
const wall = new Wall("Wall", 100);
const character = new Character("Hero", 20, 100);
