const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require("cors"),
  router = require("./routes/index");

require("dotenv").config();

app.use(express.json({ strict: false }));
app.use(cors());
app.use("/images", express.static("public/images"));
app.use("/api/v1", router);

// Handle 404 route
app.get("*", (req, res) => {
  return res.status(404).json({
    error: "End point not found",
  });
});

app.listen(port, () => {
  console.log(`Server is runing at PORT ${port}`);
});
