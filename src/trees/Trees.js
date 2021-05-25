import { Plants } from "../plants/Plants";

export class Trees extends Plants {
  constructor({ name, age }) {
    super({ name });
    this.age = age;
  }

  buildObjectFromStr(obj) {
    let str = "Дерево: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  skip(file, obj) {
    file.writeStrFromFile(this.buildObjectFromStr(obj));
  }
}
