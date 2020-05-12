const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const specialtiesSchema = new Schema({
    name: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
});

mongoose.pluralize(null);
module.exports = model('specialties', specialtiesSchema);