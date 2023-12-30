const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//Route 1: get all the notes using GET: //'api/notes/fetchallnotes
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

//Route 2: create or add a new notes using POST: //'api/notes/addnote
//authtoken is sent here too because we need to verify user is logged in before creating a note
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleats 8 characters").isLength({
      min: 8,
    })
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const err = validationResult(req);
      if (!err.isEmpty()) {
        return res.status(400).json({ err: err.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });

      const saveNote = await note.save();
      res.json(saveNote);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  }
);

//Route 3: update existing note using PUT: //'api/notes/updatenote/:id
//authtoken is sent here too because we need to verify user is logged in before creating a note
router.put(
  "/updatenote/:id",
  fetchUser,
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //create a newNote obj
      let newNote = {};
      if(title){
        newNote.title = title;
      }
      if(description){
        newNote.description = description;
      }
      if(tag){
        newNote.tag = tag;
      }
      //find the note to be updated and update it
      //validate the user making request and the owner of the note we are updating is same
      let note = await Notes.findById(req.params.id);
      if(!note){
        return res.status(404).send("not found");
      }
      if(note.user.toString() !== req.user.id){
        return res.status(401).send("not allowed")
      }

      note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote},{new:true})
      res.json({note});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Route 4: Delete an existing note using Delete: //'api/notes/deletenote/:id
//authtoken is sent here too because we need to verify user is logged in before creating a note
router.delete(
  "/deletenote/:id",
  fetchUser,
  async (req, res) => {
    try {
      
      let note = await Notes.findById(req.params.id);
      if(!note){
        return res.status(404).send("not found");
      }
      if(note.user.toString() !== req.user.id){
        return res.status(401).send("not allowed")
      }

      note = await Notes.findByIdAndDelete(req.params.id);
      res.json({"Success":"Note has been deleted", note:note});
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);



module.exports = router;
