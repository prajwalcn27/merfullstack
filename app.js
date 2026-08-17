const express = require("express");

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("This is a Home Page");
});


app.get("/about", (req, res) => {
    res.send("This is an About Us Page");
});


app.get("/contact", (req, res) => {
    res.send("This is a Contact Page");
});


app.get("/product", (req, res) => {
    res.send("This is a Product Page");
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
