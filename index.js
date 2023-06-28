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
