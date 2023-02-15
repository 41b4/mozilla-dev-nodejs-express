const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name},${this.first_name}`;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
  //si no tiene nombre o apellido asi se evita el error
});

AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
  //link del autor
});
AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  if (this.date_of_birth) {
    return DateTime.fromJSDate(this.date_of_birth).toFormat("MMMM dd, yyyy");
  } else {
    return "";
  }
});

AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  if (this.date_of_death) {
    return DateTime.fromJSDate(this.date_of_death).toFormat("MMMM dd, yyyy");
  } else {
    return "";
  }
});
AuthorSchema.virtual("lifespan").get(function () {
  let lifespan_s = "";
  if (this.date_of_birth) {
    
    lifespan_s += DateTime.fromJSDate(this.date_of_birth).toFormat("MMMM dd, yyyy")
  }
  if (this.date_of_death) {
    lifespan_s+=' - '
    lifespan_s += DateTime.fromJSDate(this.date_of_death).toFormat("MMMM dd, yyyy"
    );
  }
  
  return lifespan_s
});
//export model
module.exports = mongoose.model("Author", AuthorSchema);
