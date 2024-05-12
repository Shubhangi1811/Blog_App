const exp = require("constants")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("view engine", "ejs")
mongoose.connect("mongodb://localhost/blog_app")

app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/blog"))


app.listen(3000, () => console.log("Server started listening on port: 3000"))