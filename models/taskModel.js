const mongoose= require("mongoose");

const taskSchema = mongoose.Schema({
    task : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    number : {
        type : Number,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
});

module.exports = mongoose.model('task', taskSchema);