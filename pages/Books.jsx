import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch list of books from the API
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      });
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {books.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: '150px' }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
