var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var db = mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://customer:customer@123@cluster0.big5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
var movieSchema = new Schema(
  {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
    gener: {
      type: String,
    },
    dailyrental: {
      type: Number,
    },
    noofcopies: {
      type: Number,
    },
  },
  {
    collection: "movies",
  }
);

module.exports = mongoose.model("movie", movieSchema);
