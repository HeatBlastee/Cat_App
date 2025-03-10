import express from 'express';
import { connectDB } from './config/db.js';
import catRoute from './routes/cat.route.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/cats",catRoute);
app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port 3000");
})