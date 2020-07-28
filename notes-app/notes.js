const fs = require("fs");
const chalk = require("chalk");

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.green(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("Unable to find the note"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJsON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note Removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your notes"));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  addNote: addNote,
  removeNote,
  listNotes,
  readNote,
};
