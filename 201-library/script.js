// Handle the modal dialog for adding a new book
const addBookButton = document.querySelector("#add-book-button");
const addBookDialog = document.querySelector("#add-book-dialog");
const addBookForm = addBookDialog.querySelector("form");

const titleBook = addBookDialog.querySelector("#title");
const authorBook = addBookDialog.querySelector("#author");
const numPagesBook = addBookDialog.querySelector("#num-pages");
const isbnBook = addBookDialog.querySelector("#isbn");
const categoryBook = addBookDialog.querySelector("#category");

const cancelButtonDialog = addBookDialog.querySelector("#cancel-btn-dialog");

addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

cancelButtonDialog.addEventListener("click", () => {
  addBookDialog.close(cancelButtonDialog.value);
});

addBookForm.addEventListener("submit", () => {
  let inputFormValues = titleBook.value +
    "," + authorBook.value +
    "," + numPagesBook.value  +
    "," + isbnBook.value +
    "," + categoryBook.value;

  // Logic for adding a book in the library
  console.log(inputFormValues);
  
  addBookForm.reset();
});