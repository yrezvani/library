'use strict';

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      this.read === true ? 'read' : 'not read yet'
    }`;
  }
}

const myLibrary = [];

const addButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const cardsWrapper = document.querySelector('.cards-wrapper');

addButton.addEventListener('click', function () {
  dialog.showModal();
});

// Initialize titles array
const titles = [];

// Create book function
const createBook = function (e) {
  e.preventDefault();
  dialog.close();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  // Check if book is already in library
  if (titles.includes(title)) {
    alert('This book is already in the library');
  } else {
    addBookToLibrary(title, author, pages, read);
    updateBookTitles(title);
    displayLibrary();
  }
};

const addBookToLibrary = function (title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
};

const updateBookTitles = function (title) {
  titles.push(title);
};

// Display all books in library
const displayLibrary = function () {
  cardsWrapper.innerHTML = '';
  for (const book of myLibrary) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-cards');
    // newDiv.dataset.div = myLibrary.findIndex((x) => x.title === title);
    cardsWrapper.appendChild(newDiv);
    // Card contents
    const titleEl = document.createElement('h3');
    titleEl.textContent = book.title;
    const authorEl = document.createElement('h3');
    authorEl.textContent = book.author;
    const pagesEl = document.createElement('h3');
    pagesEl.textContent = book.pages;
    const readBtn = document.createElement('button');
    readBtn.textContent = book.read === true ? 'Read' : 'Not read';
    book.read === true
      ? readBtn.classList.add('read')
      : readBtn.classList.add('unread');
    readBtn.dataset.btn = myLibrary.findIndex((x) => x.title === book.title);
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.dataset.btn = myLibrary.findIndex((x) => x.title === book.title);
    newDiv.append(titleEl, authorEl, pagesEl, readBtn, removeBtn);
  }
};

// Remove and change read status buttons
cardsWrapper.addEventListener('click', (e) => {
  e.preventDefault();
  const el = e.target;
  if (el.classList.contains('remove')) {
    myLibrary.splice(e.target.dataset.btn, 1);
    titles.splice(e.target.dataset.btn);
    displayLibrary();
  } else if (el.classList.contains('read')) {
    el.classList.remove('read');
    el.classList.add('unread');
    el.textContent = 'Not read';
  } else if (el.classList.contains('unread')) {
    el.classList.remove('unread');
    el.classList.add('read');
    el.textContent = 'Read';
  }
});

form.addEventListener('submit', function (e) {
  createBook(e);
});
