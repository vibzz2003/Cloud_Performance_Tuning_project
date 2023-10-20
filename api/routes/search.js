import express from "express";
const Router = express.Router()

Router.get("/:qery",async (req,res) =>{
    console.log(req.params.qery)
})

export default Router