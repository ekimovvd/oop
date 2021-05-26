import { Plants } from "../plants/Plants";

export class Shrubs extends Plants {
  constructor({ name, month }) {
    super({ name });
    this.className = "Shrubs";
    this.month = month;
  }

  buildObjectFromStr(obj) {
    let str = "Куст: ";

    Object.keys(obj).forEach((key) => {
      str += `${key}: ${obj[key]} `;
    });

    return str;
  }

  multimethod(objectOne, objectTwo, file) {
    switch (objectTwo.className) {
      case "Trees":
        this.trees(objectOne, objectTwo, file);
        break;
      case "Shrubs":
        this.shrubs(objectOne, objectTwo, file);
        break;
      default:
        return 0;
    }
  }

  trees(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Shrubs - Trees");
  }

  shrubs(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Shrubs - Shrubs");
  }
}
