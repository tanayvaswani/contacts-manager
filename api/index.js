const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 6000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
