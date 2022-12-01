const mongodb = require("mongodb");
// require("dotenv").config();
const url = "mongodb://localhost:27017";
const client = new mongodb.MongoClient(url);

async function run() {
  try {
    await client.connect();
    const UserCollection = client.db("socialApp").collection("users");
    const cursor = UserCollection.find({});
    // console.log("Aggregation query");
    await cursor.forEach((docs) => {
      console.log(docs);
    });
    const aggregate = UserCollection.aggregate([
      {
        $lookup: {
          from: "posts",
          localField: "username",
          foreignField: "username",
          as: "user_posts",
          pipeline: [
            { $project: { content: 1 } },
            { $addFields: { postid: { $toString: "$_id" } } },
            {
              $lookup: {
                from: "comments",
                localField: "postid",
                foreignField: "postid",
                as: "comments",
                pipeline: [{ $project: { _id: 0, postid: 0 } }],
              },
            },
          ],
        },
      },
    ]);
    console.log("Aggregation query");
    await aggregate.forEach((docs) => {
      console.log(docs);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

run();
