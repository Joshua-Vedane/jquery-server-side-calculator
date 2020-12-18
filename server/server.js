const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));

//Store Data and functions here





//End DATA AND FUNCTIONS


//GET REQUESTS


//POST REQUESTS



//ZOOM ZOOM
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serve is running on PORT:`, PORT);
})