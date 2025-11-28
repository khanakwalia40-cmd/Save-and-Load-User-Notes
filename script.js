// This code saves user notes to localStorage, loads them when the page opens,
// and allows the user to clear the saved notes.

// Get references to DOM elements
const notesInput = document.getElementById("notesInput");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

// 1. On page load, check localStorage and show saved notes if they exist
window.addEventListener("load", function () {
  const savedNotes = localStorage.getItem("userNotes");
  if (savedNotes) {
    notesInput.value = savedNotes;
  }
});

// 2. Save Notes button: save only if not empty
saveBtn.addEventListener("click", function () {
  const text = notesInput.value.trim();

  // Validation: do not save empty notes
  if (text === "") {
    alert("Please write some notes before saving.");
    return;
  }

  localStorage.setItem("userNotes", text);
  alert("Notes saved successfully!");
});

// 3. Load Notes button: read from localStorage and show in textarea
loadBtn.addEventListener("click", function () {
  const savedNotes = localStorage.getItem("userNotes");

  if (savedNotes) {
    notesInput.value = savedNotes;
  } else {
    alert("No saved notes found.");
  }
});

// 4. Clear Notes button: remove notes from localStorage and clear textarea
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("userNotes");
  notesInput.value = "";
  alert("Notes cleared.");
});
