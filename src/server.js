import notesRoutes from './routes/notesRoutes.js';
import express from "express";
import { fileURLToPath } from 'url';
import { dirname,join } from 'path';
import { connectDb } from './config/db.js';
import dotenv from 'dotenv';
import { log } from 'console';

dotenv.config(); //configuring .env 
// console.log(process.env.MONGO_URI)

const PORT = process.env.PORT || 5001;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDb();

const app = express();

//app.use("/api/notes", notesRoutes);

app.get('/', (req,res) => {
    res.sendFile(join(__dirname,'views','index.html'));
})
app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
});


//username = cnimsaragamage
// db pw = rS69YtwYuAcwLB7Z
//connection string = mongodb+srv://cnimsaragamage:<db_password>@cluster0.0z2wjzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0