const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routerApi= require('./routes/index');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {    
    res.send('Hello World from node');
});


routerApi(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Add this line at the end of your app.js