//Задание 1
const musicCollection = [
  {
    title: "aaaaaaa",
    artist: "aaaaaa aaaaaa",
    year: "2020",
  },
  {
    title: "bbbbbbbbb",
    artist: "bbbbbb bbbbbbb",
    year: "2021",
  },
  {
    title: "ccccccccccc",
    artist: "cccccccc cccccccc",
    year: "2022",
  },
];

const library = {
  [Symbol.iterator]: () => {
    let index = 0;
    return {
      next() {
        if (index < musicCollection.length) {
          return {
            value: musicCollection[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (const el of library) {
  console.log(
    `Название альбома:${el.title} - Исполнитель:${el.artist} (${el.year})`
  );
}
