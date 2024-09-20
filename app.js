const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter = require("./app/routes/contact.route");

// Middleware
app.use(cors());
app.use(express.json());


// Route mặc định
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

// Đăng ký các routes
app.use("/api/contacts", contactsRouter);

module.exports = app;
