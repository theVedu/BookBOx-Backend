require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');


// Routes
const BookRoute = require('./src/books/book.router');


// app.use('/static', express.static(path.join(__dirname, 'public')));
const app = express();

const port = process.env.PORT || 30001;
const DB_url = process.env.DATABASE_URL || "mongodb+srv://BookBOxusername:Akgc7foFaOzdVRGD@cluster0.ixz2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.use(express.json());
app.use(cors({
    origin: ['https://humble-rotary-phone-w49647wqxpx35qq-3000.app.github.dev/'],
    credentials: true
}));


app.use('/api/books', BookRoute);



async function main() {
    await mongoose.connect(DB_url);
    app.use('/', (req, res, next) => {
        res.send("server is running");
        next();
    });
    
}


main().then(() => console.log("all good")).catch((err) => console.log(`We are getting error \n ${err}`));




app.listen(port, () => {
    console.log(`The API is running on PORT ${port}`);
});