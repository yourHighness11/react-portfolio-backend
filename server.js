require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const contactRoute = require("./routes/contactRoute");
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
dbConnect();
app.use(cors(corsOptions))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", contactRoute);

app.listen(port, () => console.log(`server started on ${port}`));
