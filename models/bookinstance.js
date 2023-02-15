const mongoose = require('mongoose')
const { DateTime } = require("luxon"); //pa que la hora no sea tan fea


const Schema = mongoose.Schema

const BookInstanceSchema = new Schema({
    book:{type: Schema.Types.ObjectId,ref: 'Book', required: true}, //referencia al libro
    imprint:{type: String, required: true},
    status:{type: String, required: true, enum:['Availabre','Maintenance','Loaned','Reserved'], default:'Maintenance'}, //enum--> los valores permitiods al string
    due_back:{type: Date, default: Date.now},
})

BookInstanceSchema.virtual('url').get(function(){
    return `/catalog/bookinstance/${this._id}`
})
//luxon:
BookInstanceSchema.virtual("due_back_formatted").get(function () {
    return DateTime.fromJSDate(this.due_back).toFormat("MMMM dd, yyyy");
});
  
// virtual para la url del libro

module.exports= mongoose.model('BookInstance', BookInstanceSchema)
