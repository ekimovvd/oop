import { Plants } from "../plants/Plants";

export class Flowers extends Plants {
  constructor({ name, type }) {
    super({ name });
    this.type = type;
  }

  buildObjectFromStr(obj) {
    let str = "Цветы: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
