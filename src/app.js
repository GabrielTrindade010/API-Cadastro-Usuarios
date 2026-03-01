const express = require("express");
const app = express();
const cors = require("cors")

const usersRoutes = require("./routes/user_routes");

app.use(express.json());
app.use(cors());
app.use("/api", usersRoutes);

const PORT = 3001;

// Route to check if the API is working
app.get("/", (req, res) => {
    res.send("Server is running!")
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});