import { Trees } from "../trees/Trees";
import { Shrubs } from "../shrubs/Shrubs";

export function switchedObject(array, container) {
  let trees = null;
  let shrubs = null;

  array.forEach((element) => {
    const params = {
      id: element[0],
      value: element[1],
      name: element[2],
    };
    switch (params.id) {
      case "1":
        let treesParams = {
          age: params.value,
          name: params.name,
        };
        trees = new Trees(treesParams);
        container.arr.push(trees);
        break;
      case "2":
        let shrubsParams = {
          month: params.value,
          name: params.name,
        };
        shrubs = new Shrubs(shrubsParams);
        container.arr.push(shrubs);
        break;
      default:
        break;
    }
  });
}

export function correctFile(data) {
  return data.map((element) => {
    return element.replace("\r", "");
  });
}

export function numberLetters(str) {
  const alphabet = "бвгджзйклмнпрстфхцчшщ".split("");

  let count = 0;
  str = str.toLowerCase().split("");
  str.forEach((element) => {
    alphabet.find((symbol) => {
      if (element === symbol) {
        count += 1;
      }
    });
  });

  return count;
}
