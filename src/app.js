const express = require("express");
const app = express();

const usersRoutes = require("./routes/user_routes");

app.use(express.json());
app.use("/api", usersRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});