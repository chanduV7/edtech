const {MongoClient} = require("mongodb");

const client = new MongoClient(
    `mongodb+srv://chandu_V:${process.env.MONGO_PASS}@cluster0.ueuz9jd.mongodb.net/chanduv7Edtech`,
    { useUnifiedTopology : true},
    { useNewUrlParser : true},
    { connectTImeoutMS : 30000},
    {keepAlive : 1}
) ;

const db = client.db();

const Courses = db.collection("Courses");
const Topics = db.collection("Topics");
const Payment = db.collection("Payment");
const Subscriptions  = db.collection("Subscriptions");

module.exports = { Courses, Topics, Payment, Subscriptions }