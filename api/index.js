const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 6000;

app.use(express.json()); // inbuilt middleware & provides a body parser
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
