export function getNotesFromLS() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

export function saveNotesToLS(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}
