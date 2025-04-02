import { useState, useEffect } from 'react';

function Quotes() {
  // Store the list of quotes
  const [quotes, setQuotes] = useState([]);

  // Fetch quotes from the API when the page loads
  useEffect(() => {
    // Call the API to get 10 random quotes
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(data => {
        setQuotes(data); // Save the quotes to state
      });
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {/* Loop through all the quotes and show each one */}
        {quotes.map((quote) => (
          <li key={quote.id} style={{ marginBottom: '1rem' }}>
            <p>"{quote.text}"</p>
            <p>- {quote.book.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
