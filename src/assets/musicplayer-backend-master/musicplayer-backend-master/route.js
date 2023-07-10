const express = require("express");
require("dotenv").config();
require("./database/musicCluster")();
const app = express();
const songModel = require("./Models/songModel");
const cors = require("cors");

app.use(cors());

app.get("/",async(req,res)=>{
    try{
        const songs = await songModel.find();
        console.log(songs)
        return res.json({statusCode:200,message:"Successful",songs})
    }catch(error){
        if(error){
            return res.json({statusCode:500,message:"something went wrong"})
        }
    }
})

const port = process.env.PORT || 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});