const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/employee";
// using mongoDB
// 1st way
const client = new MongoClient(url);
(async function () {
  try {
    await client.connect();
    const dummyData = await client.db("RandomData").collection("dummyData");
    dummyData.insertMany([
      { _id: 1, category: "cake", type: "chocolate", qty: 10 },
      { _id: 2, category: "cake", type: "ice cream", qty: 25 },
      { _id: 3, category: "pie", type: "boston cream", qty: 20 },
      { _id: 4, category: "pie", type: "blueberry", qty: 15 },
      { _id: 5, category: "butterscotch", type: "cake", qty: 10 },
      { _id: 6, category: "venilla", type: "ice cream", qty: 25 },
      { _id: 7, category: "chocolate", type: "cake", qty: 20 },
      { _id: 8, category: "pineapple", type: "cake", qty: 15 },
    ]);
    const cursor = dummyData.find({});
    await cursor.forEach((doc) => console.log(doc));
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
})();
