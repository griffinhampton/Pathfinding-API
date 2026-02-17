import express, { response } from 'express'
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

console.log(process.env)

const app = express();
var RAIL_URL = process.env.VITE_RAIL_URL;
var RAIL_API_KEY = process.env.VITE_RAIL_API_KEY;
var GRIFFIN_RAIL_ID = process.env.VITE_GRIFFIN_RAIL_ID;

const port = 3000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

app.get('/', (req,res) => {
    res.send("<h1>Hello from server</h1>")
});

app.get('/griffins-train', async(req, res) => {
    try{
        var response = await fetch (`${RAIL_URL}?$filter=CrossingId eq '${GRIFFIN_RAIL_ID}'&token=${RAIL_API_KEY}`);
    } catch(err) {
        res.status(500).json({"serverError":err})
    } finally {
        var data = await response.json()
        res.json(data);
    }
})

app.get('/users', (req,res) => {
    const users = [
        {
            id: 1,
            name: "user 1"
        },

        {
            id: 2,
            name: "user 2"
        },
    ];

    res.json(users);
});