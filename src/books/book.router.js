const express = require('express');
const BookSchema = require('./book.model');

const router = express.Router();




router.post('/create-book', async (req, res) => {
    try {
        const newBook = await BookSchema(...req.body);
        await newBook.save();

        res.status(200).send({message: "Data update Succesfully", BookSchema: newBook});

    } catch(err) {
        console.log("Not working post book", err);

        res.status(500).send({message: "Not working post book", BookSchema: newBook});
    }

})


module.exports = router;