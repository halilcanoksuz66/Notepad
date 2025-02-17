import { getNotesFromLS, saveNotesToLS } from "./storage.js";
import { createNote } from "./ui.js";

const addBtn = document.getElementById("add");
const notes = getNotesFromLS();

if (notes) {
  notes.forEach((note) => {
    let myNote = createNote(note);
    myNote.children[1].classList.remove("hidden"); // Text görünür olsun
    myNote.children[2].classList.add("hidden"); // TextArea gizlensin
  });
}

addBtn.addEventListener("click", () => createNote());
