//ensure capital name for the model file
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        // associating notes with user and here user is working as primary key for notes associated with that user
        ref: 'user',
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General",
    },
    date:{
        type: Date,
        default: Date.now
    }, 

});

const Notes = mongoose.model('notes',NotesSchema);
Notes.createIndexes();

module.exports = Notes;