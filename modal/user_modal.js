const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    phone: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    address : {
        type : [mongoose.SchemaTypes.ObjectId],
        required : true,
        ref : "Address"
    },
    subscriptions :{
        type : mongoose.SchemaTypes.Array,
        required : true,
       // href : "Subscriptions"
    },
    age: {
        type : String,
        required : true
    },
    resume :{
        type : String,
        required : false,
    },
    dob : {
        type : String,
        required : true,
    },
    gender: {
            type : String,
            required : true
    } 
},
{
    timestamps: true
}
);

module.exports  = mongoose.model("User", UserSchema)