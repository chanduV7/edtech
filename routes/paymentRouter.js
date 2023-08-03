const {Router} = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET)
const paymentRouter = Router()

paymentRouter.post("/checkout", async(req,res) => {
    const data = await stripe.checkput.sessions.create({
        line_items: req.body.cart.map((e) => ({    
                   price_data : {
                
                   }
        })) ,
        mode: "payment",
        success_url: `http://localhost:3000/?success=true`,
        cancel_url: `http://localhost:3000/?canceled=true`,
    });
    res.redirect(303, session.url);
})