// Array to store the library books
let myLibrary = [];

// Book constructor function
function Book(booktitle, bookauthor, pages, status) {
  this.booktitle = booktitle;
  this.bookauthor = bookauthor;
  this.pages = pages;
  this.status = status;
}

// Function to render the library display
function render() {
  let librarydisplay = document.querySelector(".library tbody");
  librarydisplay.innerHTML = "";

  // Iterate over each book in the library
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookel = document.createElement("tr");

    // Create table cells and populate them with book information
    bookel.innerHTML = `
      <td>${book.booktitle}</td>
      <td>${book.bookauthor}</td>
      <td>${book.pages}</td>
      <td>${book.status}</td>
      <td><button onclick="removebook(${i})">Delete</button></td>
    `;

    // Append the book row to the library display table body
    librarydisplay.appendChild(bookel);
  }
}

// Function to remove a book from the library
function removebook(index) {
  myLibrary.splice(index, 1);
  render();
}

// Function to add a book to the library
function addBookToLibrary() {
  let booktitle = document.querySelector("#booktitle").value;
  let bookauthor = document.querySelector("#bookauthor").value;
  let status = document.querySelector("#status").value;
  let pages = parseInt(document.querySelector("#quantity").value);

  // Create a new book instance
  let newBook = new Book(booktitle, bookauthor, pages, status);

  // Add the new book to the library array
  myLibrary.push(newBook);

  // Render the updated library display
  render();
}

// Event listener for the form submission
document.querySelector("#mainform").addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary();
});
