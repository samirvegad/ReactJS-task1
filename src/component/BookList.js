
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Book from './Book';

const BookList = ({ books }) => {
  const showAuthor = (author) => {
    console.log(author);
  };

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col key={book.id} xs={12} md={6} lg={4}>
            <Book book={book} onShowAuthor={showAuthor} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
