// const express = require('express')
//using es6
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';



// const __dirname = path.dirname(fileURLToPath(import.meta.url));

//config env
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//database config  (for connect database)
connectDB()


//rest object
const app = express()


//MiddleWare
app.use(cors());
app.use(express.json());    // enble json (for sending req and response in json)
app.use(morgan('dev'))
// app.use(express.static(path.join(__dirname, "./frontend/build")))
app.use(express.static(path.join(__dirname+ '../frontend/build')))


//routes (here we connect the all routes file)
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


//rest api
// app.get('/', (req,res)=>{
//     res.send('<h1>Welcom to Ecommerce App</h1>')
// })

app.use('*', function(req,res){
         res.sendFile(path.resolve(__dirname , "../frontend/build/index.html"))
     })
    

    //port
    const PORT = process.env.PORT || 8080;

    //run listen
    app.listen(PORT, () => {
        console.log(`Server runing on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
       
    })
