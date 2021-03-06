//Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://fitness-tracker', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


// routes
require("./routes/apiRoutes.js")(app);
require("./routes/viewRoutes.js")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});