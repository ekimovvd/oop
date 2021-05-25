import { Plants } from "../plants/Plants";

export class Trees extends Plants {
  constructor({ name, age, location }) {
    super({ name, location });
    this.age = age;
  }

  buildObjectFromStr(obj) {
    let str = "Дерево: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
