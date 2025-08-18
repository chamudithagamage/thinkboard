import express from "express";
import { getAllNotes, createNotes, deleteNotes, updateNotes, getNote} from '../controllers/notesController.js'
const router = express.Router();

router.get('/',getAllNotes);
router.get('/:id',getNote);
router.post('/', createNotes);
router.delete('/:id', deleteNotes);
router.put('/:id', updateNotes);

export default router;

// app.get('/api/notes', (req,res)=> {
//     res.status(200);
//     res.send('Science notes are not available');
// });

// app.post('/api/notes', (req,res) => {
//     res.status(201).json({message:"Note created successfully!"});
// })

// app.put('api/notes/:id',(req,res) => {
//     res.status(200).json({message: "message updated sucessfully"});
// })

// app.delete('api/notes/:id',(req,res) => {
//     res.status(200).json({message: "message deleted sucessfully"});
// })