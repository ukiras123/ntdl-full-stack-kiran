const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectdb = require("./src/config/mongodb");

const app = express();
app.use(cors()); //this will allow all ips
app.use(express.static(__dirname + "/build"));

//Routers
const taskRouter = require("./src/router/taskrouter");
const exp = require("constants");

const PORT = process.env.PORT || 3000;

//Basic middleware
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.use("/api/v1/task", taskRouter);

connectdb()
  .then(() => {
    console.log("Db connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/health`);
    });
  })
  .catch((error) => {
    console.log("Db connection error", error);
  });
