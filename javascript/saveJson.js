const fs = require("fs");

function saveJsonToFile(data, filename = "Json.md") {
    fs.writeFileSync(filename, data);
    console.log(`JSON saved to ${filename}`);
}

module.exports = { saveJsonToFile };
