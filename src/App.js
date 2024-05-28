// src/App.js
import React from 'react';
import booksData from './booksData';
import BookList from './component/BookList';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container className="App">
      <h1 className="my-4 text-center">Amazon Best-Seller Books</h1>
      <BookList books={booksData} />
    </Container>
  );
};

export default App;
