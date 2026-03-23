const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

/* =======================
   MongoDB Connection
======================= */
mongoose.connect("mongodb://myAtlasDBUser:2007@ac-i5dnwbn-shard-00-00.rbplob2.mongodb.net:27017,ac-i5dnwbn-shard-00-01.rbplob2.mongodb.net:27017,ac-i5dnwbn-shard-00-02.rbplob2.mongodb.net:27017/?ssl=true&replicaSet=atlas-oebtwk-shard-0&authSource=admin&appName=myAtlasClusterEDU")
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("Error connecting to MongoDB:", err);
});

/* =======================
   Schema & Model
======================= */
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model("Message", messageSchema);

/* =======================
   Routes
======================= */

// Save message
app.post("/send-message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message
    });

    await newMessage.save();

    res.status(200).json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error saving message"
    });
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

/* =======================
   Start Server
======================= */
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});