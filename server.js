// NPM Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

// Express Server
const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public Routes

// Landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

// Notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Path to database file for API calls
const dbPath = path.join(__dirname, "./db/db.json");

// API Routes

// Get notes
app.get("/api/notes", (req, res) => {
    res.sendFile(dbPath);
});

// Save new note
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    const newID = Date.now();
    newNote.id = newID;

    fs.readFile(dbPath, (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);

        notes.push(newNote);
        const writeNotes = JSON.stringify(notes);
        fs.writeFile(dbPath, writeNotes, err => {
            if (err) throw err;
            res.sendFile(dbPath);
        });
    });
});

// Delete note
app.delete("/api/notes/:noteID", (req, res) => {
    const deleteID = parseInt(req.params.noteID);

    fs.readFile(dbPath, (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);

        const revisedNotes = notes.filter(note => note.id !== deleteID);
        const writeNotes = JSON.stringify(revisedNotes);

        fs.writeFile(dbPath, writeNotes, err => {
            if (err) throw err;
            res.sendFile(dbPath);
        });
    });
});


// Server Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

