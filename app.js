const express = require("express");
const { exec } = require("child_process");
const app = express();
app.listen(3000, () => {
  console.log("Listening...");
});

app.get("/", (req, res) => {
  exec("ionic start myApp blank --no-link --no-git", (err, stdout, stderr) => {
    if (err) console.log(`error: ${err}`);

    // console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});
