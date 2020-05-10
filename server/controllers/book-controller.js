const { Book } = require("../models");

module.exports = {
    async getAllBooks(req, res) {
        const books = await Book.find();
        return res.json(books);
    },
    async saveBook(req, res) {
        const savedBook = await Book.create(req.body);
        return res.json(savedBook);
    },
    async deleteBook({ user, params }, res) {
        const deletedBook = await Book.findOneAndRemove({ _id: req.params });
        if (!deleteBook) {
            return res.status(404).json({ message: "Couldn't find book with this id!" });
        }
        return res.json(deletedBook);
    },
};