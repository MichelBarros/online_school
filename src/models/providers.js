const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const providersSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    middleName: { type: String },
    email: { type: String },
    specialty: { type: Object },
    projectedStartDate: { type: Date },
    employerId: { type: Number },
    providerType: { type: String },
    staffStatus: { type: String },
    assignedTo: { type: Number },
    status: { type: String },
    createdBy: { type: Number },
    createdAt: { type: Date },
    updatedBy: { type: Number },
    updatedAt: { type: Date }
});

mongoose.pluralize(null);
module.exports = model('providers', providersSchema);