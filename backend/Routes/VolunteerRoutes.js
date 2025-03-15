const ensureAuthenticated = require("../Middlewares/Auth");
const VolunteerModel = require("../Models/Volunteer");

const router = require("express").Router();

router.get("/volunteers", async (req, res) => {
  try {
    const volunteers = await VolunteerModel.find();
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/volunteers", async (req, res) => {
  const volunteer = new VolunteerModel({
    Name: req.body.name,
    Email: req.body.email,
    Phone: req.body.phone,
  });

  try {
    const newVolunteer = await volunteer.save();
    res.status(201).json(newVolunteer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/volunteers/:id", async (req, res) => {
  try {
    const volunteer = await VolunteerModel.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).send({ message: "Volunteer not found" });
    }
    res.status(200).send({ message: "Volunteer deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

router.put("/volunteers/:id", async (req, res) => {
  try {
    const volunteer = await VolunteerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!volunteer) {
      return res.status(404).send({ message: "Volunteer not found" });
    }
    res.status(200).send(volunteer);
  } catch (error) {
    res.status(500).send({ message: "Server error" });
  }
});

module.exports = router;
