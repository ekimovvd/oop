import { Plants } from "../plants/Plants";

export class Shrubs extends Plants {
  constructor({ name, month, location }) {
    super({ name, location });
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
