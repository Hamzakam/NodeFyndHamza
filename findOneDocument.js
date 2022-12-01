const mongoConfig = require("./utils/mongoConfig");

async function findOneDocument() {
  try {
    const db = await mongoConfig.connect("socialApp");
    const posts = db.collection("posts");
    const doc = await posts.findOne({ content: "Ipsum" });
    console.log(doc);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoConfig.connectionClose();
  }
}

findOneDocument();
