require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const courseRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");
// const paymentRoutes = require("./routes/paymentRoutes"); // Import payment routes

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// 🔹 **MongoDB Connection**
mongoose
  .mongoose.connect('mongodb+srv://shopy:prasannakumarjm@cluster0.czxko6q.mongodb.net/ambikasboutique?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch((err) => console.log(err));
// 🔹 **Routes**
app.use("/", userRoutes);
app.use("/", courseRoutes);
// app.use("/", paymentRoutes); // Use payment routes

// 🔹 **Start Server**
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
