import React from 'react';
import { Card, Button } from 'react-bootstrap';
import bookimage from './image/image1.jpg';
import bookimage1 from './image/image2.jpg';
import bookimage2 from './image/image3.webp';
import bookimage3 from './image/image4.jpg';
import bookimage4 from './image/image5.webp';
import bookimage5 from './image/image6.jpg';
import bookimage6 from './image/image7.jpg';
import bookimage7 from './image/image8.jpg';

const Book = ({ book, onShowAuthor }) => {
    const images={
        'image1.jpg':bookimage,
        'image2.jpg':bookimage1,
        'image3.webp':bookimage2,
        'image4.jpg':bookimage3,
        'image5.webp':bookimage4,
        'image6.jpg':bookimage5,
        'image7.jpg':bookimage6,
        'image8.jpg':bookimage7
    }
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={images[book.image]} style={{height:'160px'}} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <p>by {book.author}</p>
          <p>${book.price}</p>
        </Card.Text>
        <Button variant="primary" onClick={() => onShowAuthor(book.author)}>
          Show Author
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
