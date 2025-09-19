const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
    const jsonText = JSON.stringify(req.body, null, 2);
    fs.writeFileSync("Json.md", jsonText);
    res.send("JSON saved to Json.md");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
