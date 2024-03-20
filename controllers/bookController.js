import Author from "../models/Author.js";
import Book from "../models/Book.js";


/* 
const createBook = async (req, res) => {
    try {
        const newBook = await Book.create({
            authors: req.body.author,
            title: req.body.title,
            year: req.body.year,
            ISBN: req.body.ISBN,
            genre: req.body.genre
        })
        res.status(200).json(newBook);
    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear book:',
            error
        });
    }
} */

/*
const createBook = async (req, res) => {
try {
    let authorsData = req.body.authors;
    const bookData = req.body.book;
    if (!authorsData || !bookData) {
        res.status(400).json({
            msg: 'Book data missing.'
    })
    }
    if(!Array.isArray(authorsData)) {
        res.status(400).json({
            msg: 'Authors data must be an array.'
    })
    }
    authorsData = authorsData.map(author => {
        return new Author(author);
    })
    const newBook = await Book.create({
        genre: bookData.genre,
        title: bookData.title,
        ISBN: bookData.ISBN,
        year: bookData.year,
        authors: authorsData
    });
    res.json(newBook);
} catch (error) {
    res.status(500).json({
        msg: 'Error al crear book:',
        error
    });
}
};
*/
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId).populate('authors');
        if (!book) return res.status(404).json("Book not found");
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error);
    }
};

const createBook  = async (req, res) => {
try {
    // 1. Registra Authors en la bbdd
    
    // 2. Registrar book con esos authors

const {authors, book} = req.body;

if(!Array.isArray(authors) || !book) {
    return res.status(400).send('Body incorrecto.')
};

const authorPromises  = authors.map((author)=>{
    return Author.create(author);
})
// Ejecutar las promesas simultaneamente
const allAuthors = await Promise.all(authorPromises)

const authorIds = allAuthors.map((author)=> {
    return author.id
})


book.authors = authorIds
book.authors = await Book.create(book)

return  res.status(201).json({message: 'Libro creado correctamente', book});
} catch {
    res.status(400).json({
        msg: 'No se creo el libro'
    })
}
}


export { createBook, getAllBooks, getBook };
