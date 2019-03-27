const express = require("express");
const { exec } = require("child_process");
var cors = require("cors");
const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(3001, () => {
  console.log("Listening...");
});

app.post("/create", (req, res) => {
  const { appName } = req.body;
  exec(
    `ionic start ${appName} blank --no-link --no-git`,
    (err, stdout, stderr) => {
      console.log(`stderr: ${stderr}`);
      if (err) {
        console.log(`error: ${err}`);
        return res.status(400).send();
      } else {
        return res.status(201).send();
      }

      // console.log(`stdout: ${stdout}`);
    }
  );
});
