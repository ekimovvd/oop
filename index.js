import { Container } from "./src/container/Container";
import { File } from "./src/file/File";
import { switchedObject } from "./src/functions/functions";

function main(text) {
  let file = new File("1.txt", "2.txt");
  file.clearFile();

  file.writeStrFromFile("Начало!");

  file.readFile();

  const container = new Container();
  const array = file.buildFileFromArray(text);

  switchedObject(array, container);

  file.writeStrFromFile(
    `Кол-во элементов в контейнере: ${container.arr.length}`
  );
  file.writeStrFromFile("Обычный контейнер:");
  file.writeContainerFromFile(container.arr);

  file.writeStrFromFile("Мультиметод:");
  container.multimethod(file);

  container.clear();
  file.writeStrFromFile(
    `Кол-во элементов в контейнере: ${container.arr.length}`
  );
  file.writeStrFromFile("Конец!");
}

main();
