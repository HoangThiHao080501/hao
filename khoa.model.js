const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const khoaSchema = mongoose.Schema(
  {
   tenkhoa: {
      char: 30,
      type: String,
      required: true,
      trim: true,
    },
    makhoa: {
      char:10,
      type: String,
      required: true,
      trim: true,
    },
    dienthoai: {
      char: 10,
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
khoaSchema.plugin(toJSON);
khoaSchema.plugin(paginate);

const Student = mongoose.model('khoa', khoaSchema);

module.exports = khoa;