const books = [
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331382003l/24115.jpg",
    alreadyRead: false,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg",
    alreadyRead: true,
  },
  {
    title: "A Short History of Nearly Everything",
    img: "https://m.media-amazon.com/images/I/51G0i4rqVFL.jpg",
    author: "Bill Bryson",
    alreadyRead: true,
  },
  {
    title: "A Life on our Planet",
    author: "David Attenborough",
    img: "https://target.scene7.com/is/image/Target/GUEST_b9e63bab-42e0-489c-b066-d730ec0c0f19?wid=350&hei=400&fmt=pjpeg",
    alreadyRead: true,
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    img: "https://images.penguinrandomhouse.com/cover/9780345539434",
    alreadyRead: false,
  },
];

// for (let i = 0; i < books.length; i += 1) {
//   console.log(books[i]);
// }

let bookList = document.createElement("ul");

function processBook(item) {
  let listPara = document.createElement("li");
  let author = item.author;
  let title = item.title;
  listPara.style.fontSize = "20px";

  let image = document.createElement("img");
  image.src = item.img;
  image.naturalHeight;
  image.naturalWidth;

  listPara.innerHTML = ` ${title} is writing by ${author}.`;
  document.body.appendChild(listPara);
  listPara.appendChild(image);

  document.body.appendChild(image);

  if (item.alreadyRead) {
    listPara.style.color = "Green";
  } else {
    listPara.style.color = "Red";
  }
}

books.forEach(processBook);
