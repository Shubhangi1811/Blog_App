const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    postedAt: {
        type: String,
        default: new Date().toString(),
    }
})

module.exports = new mongoose.model("Blog", BlogSchema)