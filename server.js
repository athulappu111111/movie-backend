let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let dbConfig = require("./database/db");

// Express Route
const customerRoute = require("../backend/routes/customer.route");
const movieRoute = require("../backend/routes/movie.route");
const movieuserRoute = require("../backend/routes/movieuser.route");

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://customer:customer@123@cluster0.big5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/customers", customerRoute);
app.use("/movies", movieRoute);
app.use("/movieusers", movieuserRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//Production
if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));
}
