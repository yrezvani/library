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

// Add books
form.addEventListener('submit', function(e) {
    e.preventDefault();
    dialog.close();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    const titles = [];

    
    for (const book of myLibrary) {
        titles.push(book.title);
    }


    if (titles.includes(title)) {
        alert('This book is already in the library')
    } else {
        myLibrary.push(new Book(title, author, pages, read));
        // New card
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-cards');
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
        removeBtn.classList.add('remove');
        newDiv.append(titleEl, authorEl, pagesEl, readBtn, removeBtn);
        // console.log(myLibrary.findIndex((x) => x.title === title));
    };
})

// Remove books (not working)
const newDiv = document.querySelector('.new-cards');
const removeBtn = document.querySelector('.remove');

// removeBtn.addEventListener('click', function() {

//     this.newDiv.remove();
//     console.log('working');
// })
