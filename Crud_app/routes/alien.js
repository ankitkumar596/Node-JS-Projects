const express = require("express");
const Aliean = require("../models/aliean");
const router = express.Router();

// get all users details
router.get("/", async (req, res) => {
  try {
    const aliens = await Aliean.find();
    res.json(aliens);
  } catch (error) {
    console.log(error);
  }
});
// get one user details by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const alien = await Aliean.findById(id);
    res.json(alien);
  } catch (error) {
    console.log(error);
  }
});

// post router
router.post("/", async (req, res) => {
  const { name, tech, sub } = req.body;
  try {
    await Aliean.create({ name, tech, sub });
    res.status(201).json({ message: "Details saved sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
});

//update toute
router.patch("/:id", async (req, res) => {
  try {
    const alien = await Aliean.findById(req.params.id);
    alien.sub = req.body.sub;
    alien.name = req.body.name;
    alien.tech = req.body.tech;
    const a1 = await alien.save();
    res.json(a1);
  } catch (error) {
    console.log(error);
  }
});

//delete route

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Aliean.findById(req.params.id);
    const a = await alien.remove();
    res.json(a);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
