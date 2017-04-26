import express from 'express'
import dotenv from 'dotenv'
import { join } from 'path'
import { readFileSync } from 'fs'

dotenv.config();

const app = express();

app.use(express.static(join(__dirname, './dist')));

app.use((req, res) => {
    res.send(readFileSync(join(__dirname, 'index.html'), 'utf-8'));
});

app.listen(process.env.PORT, () => console.log(`Server start on ${process.env.PORT}`));