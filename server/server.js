const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo DB connection success!");
})

const visitorRouter = require("./routes/visitors.js");
const routes = ['/Air', '/Ban', '/Bus', '/Caf', '/Col', '/Hos', '/Polis', '/PostOf', '/Rail', '/'];
app.use(routes, visitorRouter);

// app.use("/Air",  visitorRouter);
// app.use("/VisitorRail", visitorRouter);

// const static = express.static(path.join('./routes/visitors.js'));
// const routes = ['/visitorAir', 'visitorHos', 'visitorRail'];
// app.use(routes, static);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
