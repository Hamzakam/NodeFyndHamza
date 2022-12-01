const mongoConfig = require("./utils/mongoConfig");

/**
 * finds document with username doe and
 * updates the content to "Content is Changed"
 */
async function findAndUpdateDocument() {
  try {
    //Connects to the db and selects the post collection
    const db = await mongoConfig.connect("socialApp");
    const posts = db.collection("posts");
    //finds doc with username doe and sets content.
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
