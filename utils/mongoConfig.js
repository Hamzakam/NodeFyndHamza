const mongodb = require("mongodb");
// require("dotenv").config();
const url = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(url);

async function connect(dbName = "sampleDB") {
  try {
    await client.connect();
    return client.db(dbName);
  } catch (error) {
    console.log(error);
  }
}

async function connectionClose() {
  try {
    await client.close();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connect, connectionClose };
