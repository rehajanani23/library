import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ id: '', author: '', title: '', year: '' });
  const [updatedBook, setUpdatedBook] = useState({ id: '', author: '', title: '', year: '' });
  const [deletedBookId, setDeletedBookId] = useState('');

  useEffect(() => {
    const localData = [
      { id: 1, author: 'Author1', title: 'Book 1', year: 2020 },
      { id: 2, author: 'Author2', title: 'Book 2', year: 2021 },
      { id: 3, author: 'Author3', title: 'Book 3', year: 2022 },
    ];
    setBooks(localData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBookData = { ...newBook, id: books.length + 1 };
    setBooks([...books, newBookData]);
    setNewBook({ id: '', author: '', title: '', year: '' });
  };

  const handleUpdate = (id) => {
    const updatedBookData = { ...updatedBook };
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return updatedBookData;
      }
      return book;
    });
    setBooks(updatedBooks);
    setUpdatedBook({ id: '', author: '', title: '', year: '' });
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <center>
    <div className="app">
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button onClick={() => setUpdatedBook(book)}>Update</button>
          </li>
        ))}
      </ul>
      <h2>Create New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="number"
            value={newBook.id}
            onChange={(event) => setNewBook({ ...newBook, id: event.target.value })}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={newBook.author}
            onChange={(event) => setNewBook({ ...newBook, author: event.target.value })}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            value={newBook.title}
            onChange={(event) => setNewBook({ ...newBook, title: event.target.value })}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            value={newBook.year}
            onChange={(event) => setNewBook({ ...newBook, year: event.target.value })}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
      <h2>Update Book</h2>
      <form>
        <label>
          ID:
          <input
            type="number"
            value={updatedBook.id}
            onChange={(event) => setUpdatedBook({ ...updatedBook, id: event.target.value })}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={updatedBook.author}
            onChange={(event) => setUpdatedBook({ ...updatedBook, author: event.target.value })}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type="text"
            value={updatedBook.title}
            onChange={(event) => setUpdatedBook({ ...updatedBook, title: event.target.value })}
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            value={updatedBook.year}
            onChange={(event) => setUpdatedBook({ ...updatedBook, year: event.target.value })}
          />
        </label>
        <br />
        <button onClick={() => handleUpdate(updatedBook.id)}>Update</button>
      </form>
    </div>
    </center>
  );
}

export default App;