module.exports = {
  db:
    process.env.MONGODB_URI ||
    "mongodb+srv://customer:customer@123@cluster0.big5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};
