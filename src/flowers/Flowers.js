import { Plants } from "../plants/Plants";

export class Flowers extends Plants {
  constructor({ name, type, location }) {
    super({ name, location });
    this.className = "Flowers";
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

  multimethod(objectOne, objectTwo, file) {
    switch (objectTwo.className) {
      case "Trees":
        this.trees(objectOne, objectTwo, file);
        break;
      case "Shrubs":
        this.shrubs(objectOne, objectTwo, file);
        break;
      case "Flowers":
        this.flowers(objectOne, objectTwo, file);
        break;
      default:
        return 0;
    }
  }

  trees(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Flowers - Trees");
  }

  shrubs(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Flowers - Shrubs");
  }

  flowers(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Flowers - FLowers");
  }
}
