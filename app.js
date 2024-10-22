require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// app.use('/static', express.static(path.join(__dirname, 'public')));

const app = express();



const port = process.env.PORT || 5000;
const DB_url = process.env.DATABASE_URL;


const main = async () => {
    await mongoose.connect(DB_url);
    app.get('/', (req, res) => {
        res.send("Hello World");
    });
    
}


main().then(() => {
    console.log("all good");
}).catch((err) => {
    console.log(`We are getting error \n ${err}`);
})




app.listen(port, () => {
    console.log(`The API is running on PORT ${port}`);
});