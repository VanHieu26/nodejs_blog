const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 100, require: true },
    descriptions: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

Course.plugin(mongooseDelete, { overrideMethods: ['find'], deletedAt: true });

module.exports = mongoose.model("Course", Course);
