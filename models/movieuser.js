var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var db = mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://customer:customer@123@cluster0.big5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
var movieuserSchema = new Schema(
  {
    movietitle: {
      type: String,
    },
    daterented: {
      type: Date,
    },
    datereturned: {
      type: Date,
    },
    rentalamount: {
      type: Number,
    },
  },
  {
    collection: "movieusers",
  }
);

module.exports = mongoose.model("movieuser", movieuserSchema);
