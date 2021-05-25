import { Plants } from "../plants/Plants";

export class Shrubs extends Plants {
  constructor({ name, month }) {
    super({ name });
    this.month = month;
  }

  buildObjectFromStr(obj) {
    let str = "Куст: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }
}
