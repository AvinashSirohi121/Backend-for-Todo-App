const mongoose = require("mongoose");

const todoSchema  = new mongoose.Schema(
    {
        title :{
            type:String,
            maxLength:50,
            required:true,
        },
        description:{
             type:String,
             maxLength:100,
             required:true
        },
        createdAt:{
            type:Date,
            default:Date.now(),
            required:true,
        },
        lastUpdatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
    }
);

module.exports = mongoose.model("todoSchema",todoSchema);