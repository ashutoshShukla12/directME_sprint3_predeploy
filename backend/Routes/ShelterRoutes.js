const  ensureAuthenticated  = require('../Middlewares/Auth');
const ShelterModel = require('../Models/Shelters');

const router = require('express').Router();

router.get('/shelters', async (req, res) => {
    try {
        const shelters = await ShelterModel.find();
        res.json(shelters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/shelters',  async (req, res) => {
    const shelter = new ShelterModel({
        name: req.body.name,
        location: req.body.location,
        capacity: req.body.capacity
    });

    try {
        const newShelter = await shelter.save();
        res.status(201).json(newShelter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/shelters/:id', async (req, res) => {
    try {
        const shelter = await ShelterModel.findByIdAndDelete(req.params.id);
        if (!shelter) {
            return res.status(404).send({ message: 'Shelter not found' });
        }
        res.status(200).send({ message: 'Shelter deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
});

router.put('/shelters/:id', async (req, res) => {
    try {
        const shelter = await ShelterModel.findByIdAndUpdate(req.params.id
            , req.body, {
                new: true
            });
        if (!shelter) {
            return res.status(404).send({ message: 'Shelter not found' });
        }
        res.status(200).send(shelter);
    } catch (error) {
        res.status(500).send({ message: 'Server error' });
    }
}
);


module.exports = router;