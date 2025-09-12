import Note from '../model/Note.js';

export const getAllNotes = async (_,res) => { //acn use _ to decommision unused req _parameter
    try{
        const notes = await Note.find().sort({createdAt:-1}); //gives every single note
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

export const deleteNotes = async (req,res) => {
    try{
        const deletedDoc = await Note.findByIdAndDelete(req.params.id)
        if(deletedDoc){
            res.status(200).json(deletedDoc)
        } else {
            res.status(404).json({message: "Note not found"})
        }

        res.status(200).json({message:"Note deleted successfully"});
    }catch(error){
        console.error(error.message);
        res.status(500).json({message:"Internal Server error"})
    }
}

export const updateNotes = async (req,res) => {
    try{
        const {title,content}= req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content},{
            new:true
        })
        if(!updatedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json(updatedNote)
        
    } catch(error){
        console.error(error.message)
        res.status(500).json({message:`${error.message}`})
    }
}

//fetch a single note
export const getNote = async (req,res) => {
    try{
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found"})
        
        res.status(200).json(note)
    }catch(error){
        console.error(error.message);
        res.status(500).json({message:"Internal Server Error"})
    }
}
