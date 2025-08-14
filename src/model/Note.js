import mongoose from 'mongoose';

//Order of creating a model
//1. Create a schema(takes an obj) - describes the shape of my data(what fields exist,data types, any rules)
//2. Model based on that schema - A constructor created from the schema that lets dev interact with specific coleection

// schema
const noteSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
},
{ timestamps: true } //mongo default give createdAt, updatedAt

);

//create a model

const Note = mongoose.model("Note", noteSchema);

//export the model

export default Note;