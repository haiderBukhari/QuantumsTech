const mongoose = require("mongoose");
let db = "mongodb+srv://moiz:1122@cluster0.dfiq30i.mongodb.net/music?retryWrites=true&w=majority";

async function dataBaseConnect() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = dataBaseConnect;
