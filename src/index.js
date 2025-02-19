import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import app from './app.js';
import chalk from "chalk";

dotenv.config({
    path: './.env'
});

connectDB().then(
    () => {
        app.on("error", (error) => {
            console.log(chalk.red("Error at"), error); // Red text
            throw error;
        });

        const port = process.env.PORT || 8080;

        app.listen(port, () => {
            console.log(chalk.green("server is running at"), chalk.yellow("PORT :"), chalk.cyan(port)); // Green, Yellow, Cyan text
        })

    }
).catch((error) => {
    console.log(chalk.red("MONGO DB connection failed !!!"), error); // Red text
});
