const mongoConfig = require("./utils/mongoConfig");

async function findAndUpdateDocument() {
  try {
    const db = await mongoConfig.connect("socialApp");
    const posts = db.collection("posts");
    console.log("Doc before update");
    const doc = await posts.findOne({ username: "doe" });
    console.log(doc);
    console.log("Doc after update");
    const updatedDoc = await posts.findOneAndUpdate(
      { username: "doe" },
      { $set: { content: "Content is Changed" } },
      { returnDocument: "after" }
    );
    console.log(updatedDoc);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoConfig.connectionClose();
  }
}

findAndUpdateDocument();
