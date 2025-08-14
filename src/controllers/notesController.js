export const getNotes = (req,res) => {
    res.status(200).json({message:"You just fetched notes!"});
}

export const createNotes = (req,res) => {
    res.status(200).json({message:"You post 45 notes to the database!"})
}

export const deleteNotes = (req,res) => {
    res.status(200).json({message:"You deleted a Post."})
}

export const updateNotes = (req,res) => {
    res.status(200).json({message:"You updated a Note"})
}

