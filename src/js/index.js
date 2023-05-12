import orderByPropserByProps from "./orderByProps";
import getAttacks from "./getAttacks";
// Дз 1
const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
const order = ["name", "level"];

// Дз 2
const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const resultformep = orderByPropserByProps(obj, order); //дз 1
console.log(resultformep);

const attacks = getAttacks(character); // дз 2
console.log(attacks);
