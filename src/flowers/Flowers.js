import { Plants } from "../plants/Plants";

export class Flowers extends Plants {
  constructor({ name, type, location }) {
    super({ name, location });
    this.type = type;
  }

  buildObjectFromStr(obj) {
    let str = "Цветы: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip() {}
}
