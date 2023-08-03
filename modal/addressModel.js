
const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    door: {
        type : String,
        required : true
    },
    street: {
        type : String,
        required : true
    },
    landmark: {
        type : String,
        required : false
    },
    state: {
        type : String,
        required : true
    },
    locality : {
        type : String ,
        required : true
    },
    pincode : {
        type : String ,
        required : true
    },
    country : {
        type: String,
        required : true
    }
});

module.exports  = mongoose.model("Address", addressSchema)