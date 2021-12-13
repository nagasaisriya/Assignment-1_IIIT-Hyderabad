const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const kfSchema = new Schema({
  PowerSteering: Boolean,
  PowerWindowsFront: Boolean,
  AntiLockBrakingSystem: Boolean,
  AirConditioner: Boolean,
  DriverAirbag: Boolean,
  PassengerAirbag: Boolean,
  AutomaticClimateControl: Boolean,
  AlloyWheels: Boolean,
  MultifunctionSteeringWheel: Boolean
})
module.exports = mongoose.model('keyFeatures', kfSchema);
