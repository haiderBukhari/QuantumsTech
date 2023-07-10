const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    name:String,
    url:String,
    author:String,
    id:Number,
    links:{
        images:[
            {
                url:String
            },
            {
                url:String
            }
        ]
    }
})

module.exports =  mongoose.model("song",songSchema)