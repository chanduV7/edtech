const {Router} = require("express");
const { addAddress,getUsersAddress, updateAddress,deleteAddress } = require("../controllers/addressController");

const addressRouter = Router();

addressRouter.post("/add", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("UnAuthorized");
        const data = await addAddress(req);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

addressRouter.get("/getUsersAdd", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("UnAuthorized");
        const data = await getUsersAddress(req);
        res.send(data.map(e => e.value))
    } catch (error) {
        console.log(error)
    }
})

addressRouter.patch("/:addressId", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("UnAuthorized");
        const data = await updateAddress(req);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
addressRouter.delete("/:addressId", async(req,res) => {
    try {
        if(!req.isAuth) throw new Error("UnAuthorized");
        const data = await deleteAddress(req);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports =  addressRouter;