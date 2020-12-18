const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));









//ZOOM ZOOM
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serve is running on PORT:`, PORT);
})