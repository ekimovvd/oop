import { Plants } from "../plants/Plants";

export class Trees extends Plants {
  constructor({ name, age }) {
    super({ name });
    this.className = "Trees";
    this.age = age;
  }

  buildObjectFromStr(obj) {
    let str = "Дерево: ";

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
    file.writeStrFromFile("Trees - Trees");
  }

  shrubs(objectOne, objectTwo, file) {
    file.writeStrFromFile(this.buildObjectFromStr(objectOne));
    file.writeStrFromFile(objectTwo.buildObjectFromStr(objectTwo));
    file.writeStrFromFile("Trees - Shrubs");
  }
}
