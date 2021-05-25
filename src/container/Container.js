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
}
