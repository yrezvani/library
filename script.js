'use strict';

const Book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages, ${this.read === true ? 'read' : 'not read yet'}`;
    }
}

const myLibrary = [];

const addBook = function () {
    const title = prompt ('Enter the title of the book');
    const author = prompt('Enter the name of the author');
    const pages = prompt('Enter the number of pages');
    const read = prompt('Have you read the book? Enter true or false');
    myLibrary.push(new Book(title, author, pages, read));
}

myLibrary.push(new Book('Shahnama', 'Ferdowsi', 300, true));
myLibrary.push(new Book('Iliad', 'Homer', 400, false));
myLibrary.push(new Book('McBeth', 'Shakespear', 500, false));
myLibrary.push(new Book('Titanic', 'Cameron', 500, true));

const showBooks = function () {
    for (const book of myLibrary) {
        console.log(book);
    }
}

const addButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const cardsWrapper = document.querySelector('.cards-wrapper');

addButton.addEventListener('click', function() {
    dialog.showModal();
})

// adding books
form.addEventListener('submit', function(e) {
    e.preventDefault();
    dialog.close();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value === 'on' ? true : false;

    myLibrary.push(new Book(title, author, pages, read));
    // New card
    const newDiv = document.createElement('div');
    newDiv.classList.add('cards');
    cardsWrapper.appendChild(newDiv);
    
    // Card contents
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    const authorEl = document.createElement('h3');
    authorEl.textContent = author;
    const pagesEl = document.createElement('h3');
    pagesEl.textContent = pages
    const readBtn = document.createElement('button');
    readBtn.textContent = read === true ? 'Read' : 'Not read';
    read === true ? readBtn.classList.add('read') : readBtn.classList.add('unread');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('unread');
    newDiv.append(titleEl, authorEl, pagesEl, readBtn, removeBtn);

});

// addButton.addEventListener('click', function() {
//     dialog.close();
// });



