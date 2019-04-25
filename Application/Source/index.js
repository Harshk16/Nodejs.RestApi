const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./domain/config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => console.log('Sucessfull Connection')
        .catch(err => console.log(err)));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`));
