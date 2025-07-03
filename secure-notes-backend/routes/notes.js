const express = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a note
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.create({
      user: req.user,
      title,
      content,
    });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: "Error creating note", error: err.message });
  }
});

// Get all notes for the authenticated user
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user }).sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching notes", error: err.message });
  }
});

// Update a note
router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const note = await Note.findOneAndUpdate(
      { _id: id, user: req.user },  // ensure only the owner's note is updated
      { title, content },
      { new: true }  // return updated note
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Error updating note", error: err.message });
  }
});

// Delete a note
router.delete("/:id", auth, async (req, res) => {
  try {
    await Note.findOneAndDelete({ _id: req.params.id, user: req.user });
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting note", error: err.message });
  }
});

module.exports = router;
