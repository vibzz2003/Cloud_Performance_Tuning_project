import express from "express";
const Router = express.Router()

Router.get("/:qery",async (req,res) =>{
    const search1 = req.params.qery

    const q1 = "SELECT id FROM users WHERE username = search1";
    
})

export default Router