import orderByPropserByProps from "./orderByProps";

const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
const order = ["name", "level"];

const resultformep = orderByPropserByProps(obj, order);
console.log(resultformep);
