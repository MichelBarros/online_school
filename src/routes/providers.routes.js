const { Router } = require('express');
const router = Router();

const providers = require('../models/providers');

router.get('/', async (req, res) => {
    const provider = await providers.find();
    res.json(provider);
});

router.get('/:id', async (req, res) => {
    const provider = await providers.findById(req.params.id);
    res.json(provider);
});

router.post('/', async (req, res) => {
    const { firstName, lastName, middleName, email, specialty, projectedStartDate, employerId, providerType, staffStatus, assignedTo, status, createdBy, createdAt, updatedBy, updatedAt } = req.body;
    const provider = new providers({ firstName, lastName, middleName, email, specialty, projectedStartDate, employerId, providerType, staffStatus, assignedTo, status, createdBy, createdAt, updatedBy, updatedAt });
    await provider.save();    
    console.log(req.body);
    res.json({status: 'Provider Saved'});
});

router.put('/:id', async (req, res) => {
    const { firstName, lastName, middleName, email, specialty, projectedStartDate, employerId, providerType, staffStatus, assignedTo, status, createdBy, createdAt, updatedBy, updatedAt } = req.body;
    const newProvider = { firstName, lastName, middleName, email, specialty, projectedStartDate, employerId, providerType, staffStatus, assignedTo, status, createdBy, createdAt, updatedBy, updatedAt };
    await providers.findByIdAndUpdate(req.params.id, newProvider);
    res.json({status: 'Provider Updated'});
});

router.delete('/:id', async (req, res) => {
    await providers.findByIdAndRemove(req.params.id);
    res.json({status: 'Provider Deleted'});
});

module.exports = router;