const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
    const jsonText = JSON.stringify(req.body, null, 2);
    fs.writeFileSync("Blockly.json", jsonText);
    res.send("JSON saved to Blockly.json");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
