const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
  return names.trim();
}

const expectedResult = 43;

function averageAge() {
  const numberOfBooks = books.length;
  const sumOfAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ), 0);
  return sumOfAges / numberOfBooks;
}

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}

function longestNamedBook() {
  return books.reduce((biggestBook, currentBook) => {
    if (currentBook.name.length > biggestBook.name.length) {
      return currentBook;
    }
    return biggestBook;
  });
}

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
  }));
  return nameAndAverage;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
