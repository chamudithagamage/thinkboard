import notesRoutes from './routes/notesRoutes.js';
import express from "express";
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';
import { connectDb } from './config/db.js';
import dotenv from 'dotenv';
import { log } from 'console';
import consoleInfo from './middleware/consoleInfo.js';
import rateLimiter from './middleware/rateLimiter.js'


dotenv.config(); //configuring .env 
// console.log(process.env.MONGO_URI)

const PORT = process.env.PORT || 5001;

//instead of directly using __dirname - in ESM we use below method to add path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDb();

const app = express();

//middleware- to use url encoded data
app.use(express.json());

//ratemiliter middleware
app.use(rateLimiter);

//Middleware to send info to the console(before the respond middleware runs)
app.use(consoleInfo);

app.use("/api/notes", notesRoutes);

//file sytems
// app.get('/', (req,res) => {
//     res.sendFile(join(__dirname,'views','index.html'));
// })

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});


//username = cnimsaragamage
// db pw = rS69YtwYuAcwLB7Z
//connection string = mongodb+srv://cnimsaragamage:<db_password>@cluster0.0z2wjzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0