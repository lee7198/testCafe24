var express = require("express");
var path = require("path");
var app = express();
var PORT = 8001;

app.use(express.static(__dirname));
app.get("/[^.]+$", function (req, res) {
  res
    .set("Content-Type", "text/html")
    .sendFile(path.join(__dirname, "./index.html"));
});
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
