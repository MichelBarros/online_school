const { Router } = require('express');
const router = Router();

const specialties = require('../models/specialties');

router.get('/', async (req, res) => {
    const specialtie = await specialties.find();
    res.json(specialtie);
});

router.get('/:id', async (req, res) => {
    const specialtie = await specialties.findById(req.params.id);
    res.json(specialtie);
});

router.post('/', async (req, res) => {
    const { name, createdBy, createdAt, updatedBy, updatedAt } = req.body;
    const specialtie = new specialties({ name, createdBy, createdAt, updatedBy, updatedAt });
    await specialtie.save();    
    console.log(req.body);
    res.json({status: 'Specialtie Saved'});
});

router.put('/:id', async (req, res) => {
    const { name, createdBy, createdAt, updatedBy, updatedAt } = req.body;
    const newSpecialtie = { name, createdBy, createdAt, updatedBy, updatedAt };
    await specialties.findByIdAndUpdate(req.params.id, newSpecialtie);
    //console.log(req.params.id);
    res.json({status: 'Specialtie Updated'});
});

router.delete('/:id', async (req, res) => {
    await specialties.findByIdAndRemove(req.params.id);
    res.json({status: 'Specialtie Deleted'});
});

module.exports = router;