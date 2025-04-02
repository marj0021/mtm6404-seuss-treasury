import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
      });
  }, [id]);

  return (
    <div>
      {book && (
        <div>
          <h1>{book.title}</h1>
          <img src={book.image} alt={book.title} style={{ width: '200px' }} />
          <p>{book.description}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
