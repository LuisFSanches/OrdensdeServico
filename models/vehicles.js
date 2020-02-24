const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  serie: {
    type: String,
    required: true
  },
  prefixo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Vehicles", vehicleSchema);
