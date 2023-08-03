require("dotenv").config()
const Express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const Auth = require("./middlewares/Auth")
const app = Express();
const cors = require("cors");
const addressRouter = require("./routes/addressRouter");
app.use(Express.json());
app.use(Express.urlencoded({extended:true}))
app.use(Auth);
app.use(cors());


mongoose.connect(`mongodb+srv://chandu_V:${process.env.MONGO_PASS}@cluster0.ueuz9jd.mongodb.net/chanduv7Edtech`)

app.use("/users",userRouter); //http://localhost:4000/users/login //http://127.00.1
app.use("/address",addressRouter);
app.use("/")
app.listen(4000, () => console.log("server is running on port 4000"));