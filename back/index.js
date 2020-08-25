const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://root:toor@cluster0-j0gxd.mongodb.net/museo?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const especimen = require("./routes/routeEspecimen");
app.use("/especimenes", especimen);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
