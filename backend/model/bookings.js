const mongoose = require("mongoose");
const joi = require("joi");

const schema = mongoose.Schema({
  wheels: {
    type: String,
    required: true,
  },
  vehicle: { type: String, required: true },
  minDate: { type: string, required: true },
  maxDate: { type: string, required: true },
});

const Booking = new mongoose.model("Bookings", schema);

function validateBooking(body) {
  const schema = joi.object({
    carType: joi.string().required(),
    vehicle: joi.string().required(),
    booked: joi.boolean().required(),
    minDate: joi.string().required(),
    maxDate: joi.string().required(),
  });
  return schema.validate(body);
}

module.exports = { Booking, validateBooking };