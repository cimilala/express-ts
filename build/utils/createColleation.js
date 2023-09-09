"use strict";
function createColleation(colleationName, protypeObj) {
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    colleationName = new Schema(protypeObj);
    return mongoose.model(colleationName, colleationName);
}
module.exports = createColleation;
