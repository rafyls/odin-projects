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
  addBookToLibrary(inputFormValues)
  
  addBookForm.reset();
});

const myLibrary = [];
const mainContent = document.querySelector("#main-content");

function Book(id, title, author, nump, isbn, cat, isread) {
  this.id = id
  this.title = title;
  this.author = author;
  this.numpages= nump;
  this.isbn = isbn;
  this.category = cat;
  this.read = isread;
}

function addBookToLibrary(formValues) {

  bookInfos = formValues.split(",")

  let bookId = crypto.randomUUID();

  let book = new Book(bookId, bookInfos[0], bookInfos[1], bookInfos[2],
    bookInfos[3], bookInfos[4], false);

  myLibrary.push(book);

  displayBook(book);
}

function displayBook(book) {

  const cardBook = document.createElement("div");
  cardBook.setAttribute("class", "book-card");
  cardBook.setAttribute("data-id", book.id);

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = book.title;
  cardBook.appendChild(cardTitle);
    
  const cardHr = document.createElement("div");
  cardHr.setAttribute("class", "hr");
  cardBook.appendChild(cardHr);

  const cardInfos = document.createElement("div");
  cardInfos.setAttribute("class", "book-infos");

  const cardDivAuthor = document.createElement("div");
  const authorSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  authorSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  authorSvg.setAttribute("viewBox", "0 0 24 24");
  const svgPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgPath1.setAttribute("d", "M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z");
  const pAuthor = document.createElement("p");
  pAuthor.textContent = book.author;
  authorSvg.appendChild(svgPath1);
  cardDivAuthor.appendChild(authorSvg);
  cardDivAuthor.appendChild(pAuthor);
  cardInfos.appendChild(cardDivAuthor);

  const cardDivPages = document.createElement("div");
  const pagesSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  pagesSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  pagesSvg.setAttribute("viewBox", "0 0 24 24");
  const svgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgPath2.setAttribute("d", "M21,17H7V3H21M21,1H7A2,2 0 0,0 5,3V17A2,2 0 0,0 7,19H21A2,2 0 0,0 23,17V3A2,2 0 0,0 21,1M14,15H16V5H12V7H14M3,5H1V21A2,2 0 0,0 3,23H19V21H3V5Z");
  const pPages = document.createElement("p");
  pPages.textContent = book.numpages + " pages";
  pagesSvg.appendChild(svgPath2);
  cardDivPages.appendChild(pagesSvg);
  cardDivPages.appendChild(pPages);
  cardInfos.appendChild(cardDivPages);

  const cardDivIsbn = document.createElement("div");
  const isbnSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  isbnSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  isbnSvg.setAttribute("viewBox", "0 0 24 24");
  const svgPath3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgPath3.setAttribute("d", "M2,6H4V18H2V6M5,6H6V18H5V6M7,6H10V18H7V6M11,6H12V18H11V6M14,6H16V18H14V6M17,6H20V18H17V6M21,6H22V18H21V6Z");
  const pIsbn = document.createElement("p");
  pIsbn.textContent = book.isbn;
  isbnSvg.appendChild(svgPath3);
  cardDivIsbn.appendChild(isbnSvg);
  cardDivIsbn.appendChild(pIsbn);
  cardInfos.appendChild(cardDivIsbn);

  const cardDivCategory = document.createElement("div");
  const categorySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  categorySvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  categorySvg.setAttribute("viewBox", "0 0 24 24");
  const svgPath4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgPath4.setAttribute("d", "M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20A2,2 0 0,0 7,18A2,2 0 0,0 5,16A2,2 0 0,0 3,18A2,2 0 0,0 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z");
  const pCategory = document.createElement("p");
  pCategory.textContent = book.category;
  categorySvg.appendChild(svgPath4);
  cardDivCategory.appendChild(categorySvg);
  cardDivCategory.appendChild(pCategory);
  cardInfos.appendChild(cardDivCategory);

  cardBook.appendChild(cardInfos);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "button")
  const deleteSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  deleteSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  deleteSvg.setAttribute("viewBox", "0 0 24 24");
  const svgPath5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  svgPath5.setAttribute("d", "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
  deleteSvg.appendChild(svgPath5);
  deleteButton.appendChild(deleteSvg);
  cardBook.appendChild(deleteButton);

  mainContent.appendChild(cardBook);

  deleteButton.addEventListener("click", () => {
    if (cardBook) {
      const element = cardBook;
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      mainContent.removeChild(cardBook);
    }
  });
}