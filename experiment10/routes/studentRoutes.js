const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Create
router.post("/", async (req,res)=>{
    const data = await Student.create(req.body);
    res.json(data);
});

// Read All
router.get("/", async (req,res)=>{
    const data = await Student.find();
    res.json(data);
});

// Read One
router.get("/:id", async (req,res)=>{
    const data = await Student.findById(req.params.id);
    res.json(data);
});

// Update
router.put("/:id", async (req,res)=>{
    const data = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(data);
});

// Delete
router.delete("/:id", async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
});

module.exports = router;