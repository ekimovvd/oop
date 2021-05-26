import { numberLetters, compare } from "../functions/functions";

export class Container {
  constructor() {
    this.arr = [];
  }

  sorting() {
    this.arr.sort((a, b) =>
      compare(numberLetters(a.name), numberLetters(b.name))
    );
  }

  clear() {
    this.arr = [];
  }

  skip(file) {
    this.arr.forEach((obj) => {
      obj.skip(file, obj);
    });
  }

  multimethod(file) {
    for (let i = 0; i < this.arr.length - 1; i++) {
      for (let j = i + 1; j < this.arr.length; j++) {
        this.arr[i].multimethod(this.arr[i], this.arr[j], file);
      }
    }
  }
}
