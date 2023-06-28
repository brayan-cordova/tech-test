const express = require("express");
const app = express();

app.use(express.json());

// Array for books

const books = [
    {
        id: 1,
        book: "Metamorphosis",
        publisher_name: "Alianza",
        year: "1990",
        page_number: 200,
        shelving: 1,
    },
    {
        id: 2,
        book: "New System",
        publisher_name: "Sion",
        year: "2012",
        page_number: 128,
        shelving: 2,
    },
    {
        id: 3,
        book: "The computer history",
        publisher_name: "Boyante",
        year: "2000",
        page_number: 150,
        shelving: 3,
    },
];

// Array for authors

const authors = [
    {
        id: 1,
        book: "Metamorphosis",
        author: "Jose Maria Garcia",
        year: "1990",
        page_number: 200,
    },
    {
        id: 2,
        book: "New System",
        author: "Esteban Hernandez Castello",
        year: "2012",
        page_number: 128,
    },
    {
        id: 3,
        book: "The computer history",
        author: "Robert Stevenson",
        year: "2000",
        page_number: 150,
    },
];

// api request

// get method

app.get("/", (req, res) => {
    res.send("Library API");
});

app.get("/api/books", (req, res) => {
    res.send(books);
});

app.get("/api/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("book not found");
    else res.send(book);
});

app.get("/api/authors", (req, res) => {
    res.send(authors);
});

app.get("/api/authors/:id", (req, res) => {
    const author = authors.find((a) => a.id === parseInt(req.params.id));
    if (!author) return res.status(404).send("author not found");
    else res.send(author);
});

// post method

app.post("/api/books", (req, res) => {
    const book = {
        id: books.length + 1,
        book: req.body.book,
        publisher_name: req.body.publisher_name,
        year: parseInt(req.body.year),
        page_number: parseInt(req.body.page_number),
        shelving: parseInt(req.body.shelving),
    };
    books.push(book);
    res.send(book);
});

app.post("/api/authors", (req, res) => {
    const author = {
        id: authors.length + 1,
        book: req.body.book,
        author: req.body.author,
        year: parseInt(req.body.year),
        page_number: parseInt(req.body.page_number),
    };
    books.push(author);
    res.send(author);
});

// delete method

app.delete("/api/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found");

    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
});

app.delete("/api/authors/:id", (req, res) => {
    const author = authors.find((a) => a.id === parseInt(req.params.id));
    if (!author) return res.status(404).send("Author not found");

    const index = authors.indexOf(author);
    authors.splice(index, 1);
    res.send(author);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`listening on port ${port}...`));
