require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');


// Routes
const BookRoute = require('./src/books/book.router');


// app.use('/static', express.static(path.join(__dirname, 'public')));
const app = express();

const port = process.env.PORT || 5000;
const DB_url = process.env.DATABASE_URL || "mongodb+srv://BookBOxusername:Akgc7foFaOzdVRGD@cluster0.ixz2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.use(express.json());
app.use(cors({
    origin: [''],
    credentials: true
}));


app.use('/api/books', BookRoute);



async function main() {
    await mongoose.connect(DB_url);
    app.use('/', (req, res) => {
        res.send("Hello World");
        
    });
    
}


main().then(() => console.log("all good")).catch((err) => console.log(`We are getting error \n ${err}`));




app.listen(port, () => {
    console.log(`The API is running on PORT ${port}`);
});