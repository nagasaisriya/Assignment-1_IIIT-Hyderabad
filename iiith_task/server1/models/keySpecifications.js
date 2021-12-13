const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ksSchema = new Schema({
  ARAIMileage: String,
  FuelType: String,
  EngineDisplacement: Number,
  MaxPower: String,
  MaxTorque: String,
  SeatingCapacity: Number,
  TransmissionType: String,
  BootSpace: Number,
  FuelTankCapacity: Number,
  BodyType: String,
  kfid: String
})
module.exports = mongoose.model('keySpecifications', ksSchema);
