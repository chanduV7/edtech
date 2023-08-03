const {Router} = require("express");

const {addCourse} = require("../controllers/courseController");
const courseRouter = new Router();

addCourse.post("/add", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error ("Unauthenticated");
        const data =  await addCourse(req);
        res.send(data)
    } catch (error) {
        res.send({error: error.message})
    }
})

addCourse.get("/all", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error ("Unauthenticated");
        const data =  await getAllCourses(req);
        res.send(data)
    } catch (error) {
        res.send({error: error.message})
    }
})

module.exports = courseRouter;