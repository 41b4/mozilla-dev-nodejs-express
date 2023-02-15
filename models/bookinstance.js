const mongoose = require('mongoose')

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
// virtual para la url del libro

module.exports= mongoose.model('BookInstance', BookInstanceSchema)
