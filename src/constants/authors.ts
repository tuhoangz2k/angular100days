export interface IAuthor {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  id: number;
}
export const authorList: IAuthor[] = [
  {
    id: 1,
    author: 'Gabriel Garc\u00eda M\u00e1rquez',
    country: 'Colombia',
    imageLink: 'images/one-hundred-years-of-solitude.jpg',
    language: 'Spanish',
    link: 'https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n',
    pages: 417,
    title: 'One Hundred Years of Solitude',
    year: 1967,
  },
  {
    id: 2,
    author: 'Gabriel Garc\u00eda M\u00e1rquez',
    country: 'Colombia',
    imageLink: 'images/love-in-the-time-of-cholera.jpg',
    language: 'Spanish',
    link: 'https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n',
    pages: 368,
    title: 'Love in the Time of Cholera',
    year: 1985,
  },

  {
    id: 3,
    author: 'Johann Wolfgang von Goethe',
    country: 'Saxe-Weimar',
    imageLink: 'images/faust.jpg',
    language: 'German',
    link: 'https://en.wikipedia.org/wiki/Goethe%27s_Faust\n',
    pages: 158,
    title: 'Faust',
    year: 1832,
  },

  {
    id: 3,
    author: 'Nikolai Gogol',
    country: 'Russia',
    imageLink: 'images/dead-souls.jpg',
    language: 'Russian',
    link: 'https://en.wikipedia.org/wiki/Dead_Souls\n',
    pages: 432,
    title: 'Dead Souls',
    year: 1842,
  },

  {
    id: 4,
    author: 'G\u00fcnter Grass',
    country: 'Germany',
    imageLink: 'images/the-tin-drum.jpg',
    language: 'German',
    link: 'https://en.wikipedia.org/wiki/The_Tin_Drum\n',
    pages: 600,
    title: 'The Tin Drum',
    year: 1959,
  },

  {
    id: 5,
    author: 'Jo\u00e3o Guimar\u00e3es Rosa',
    country: 'Brazil',
    imageLink: 'images/the-devil-to-pay-in-the-backlands.jpg',
    language: 'Portuguese',
    link: 'https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n',
    pages: 494,
    title: 'The Devil to Pay in the Backlands',
    year: 1956,
  },

  {
    id: 6,
    author: 'Knut Hamsun',
    country: 'Norway',
    imageLink: 'images/hunger.jpg',
    language: 'Norwegian',
    link: 'https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n',
    pages: 176,
    title: 'Hunger',
    year: 1890,
  },

  {
    id: 7,
    author: 'Ernest Hemingway',
    country: 'United States',
    imageLink: 'images/the-old-man-and-the-sea.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n',
    pages: 128,
    title: 'The Old Man and the Sea',
    year: 1952,
  },

  {
    id: 8,
    author: 'Homer',
    country: 'Greece',
    imageLink: 'images/the-iliad-of-homer.jpg',
    language: 'Greek',
    link: 'https://en.wikipedia.org/wiki/Iliad\n',
    pages: 608,
    title: 'Iliad',
    year: -735,
  },

  {
    id: 9,
    author: 'Homer',
    country: 'Greece',
    imageLink: 'images/the-odyssey-of-homer.jpg',
    language: 'Greek',
    link: 'https://en.wikipedia.org/wiki/Odyssey\n',
    pages: 374,
    title: 'Odyssey',
    year: -800,
  },

  {
    id: 10,
    author: 'Henrik Ibsen',
    country: 'Norway',
    imageLink: 'images/a-Dolls-house.jpg',
    language: 'Norwegian',
    link: 'https://en.wikipedia.org/wiki/A_Doll%27s_House\n',
    pages: 68,
    title: "A Doll's House",
    year: 1879,
  },

  {
    id: 11,
    author: 'James Joyce',
    country: 'Irish Free State',
    imageLink: 'images/ulysses.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Ulysses_(novel)\n',
    pages: 228,
    title: 'Ulysses',
    year: 1922,
  },
];
