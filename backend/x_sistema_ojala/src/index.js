const express = require('express');
const app = express();

app.get("/", (request, response) => {
    response.send("Its works")
})

app.listen(3000, console.log("server running"));