const express = require("express");
// const userService = require("./userService");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("/form.html", (request, response) => {
  try {
    response.send("form.html");
  } catch (error) {
    console.error(error);
  }
});

app.post("/user_register", (request, response) => {
  try {
    response.status(200).json({
      first_name: request.body.name,
      last_name: request.body.email,
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000);
