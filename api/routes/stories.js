import express from "express";
import { getStories, addStory, deleteStory } from "../controller/story.js";

const router = express.Router();

router.get("/", getStories);
router.post("/", async (req,res)=>{
    console.log(req.body)
    res.status(200).json("123")
});
router.delete("/:id", deleteStory);

export default router;