const express = require("express");
const app = express();
const port = 8000;

const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use("/tasks", taskRoutes);

app.use((err, res) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
