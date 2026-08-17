const express = require("express");

const app = express();
const PORT = 3000;

// Home page
app.get("/", (req, res) => {
    res.send("This is a Home Page");
});

// About Us page
app.get("/about", (req, res) => {
    res.send("This is an About Us Page");
});

// Contact page
app.get("/contact", (req, res) => {
    res.send("This is a Contact Page");
});

// Product page
app.get("/product", (req, res) => {
    res.send("This is a Product Page");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});