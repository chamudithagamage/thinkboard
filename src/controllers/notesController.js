import Note from '../model/Note.js';

export const getNotes = async (req,res) => {
    try{
        const notes = await Note.find(); //gives every single note
        res.status(200).json(notes);
    } catch(error){
        console.error(error.message)
        res.status(500).json({message:"Internal Server error"})
    }
}

export const createNotes =async (req,res) => {
    try{
        const {title, content} = req.body;
        const newNote = new Note({title:title, content:content})

        //save note
        await newNote.save();
        res.status(201).json({message:"Note created successfully"})
    } catch(error){
        console.error(error.message);
        res.status(500).json({message:`${error.message}`})
    }

    //test
    //res.status(200).json({message:"You created a new Post."})
}

export const deleteNotes = (req,res) => {
    res.status(200).json({message:"You deleted a Post."})
}

export const updateNotes = (req,res) => {
    res.status(200).json({message:"You updated a Note"})
}

