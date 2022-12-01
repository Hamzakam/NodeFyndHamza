const mongodb = require("mongodb");
const url = "mongodb://localhost:27017";

//Defines a client with above url
const client = new mongodb.MongoClient(url);

/**
 * Creates a mongodb connection and returns the Db Passed.
 * @param {string} dbName
 * @returns Mongodb.Db
 */
async function connect(dbName = "sampleDB") {
  try {
    await client.connect();
    return client.db(dbName);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Closes the connection for mongodb.
 */
async function connectionClose() {
  try {
    await client.close();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { connect, connectionClose };
