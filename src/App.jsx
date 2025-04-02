import { Routes, Route } from 'react-router-dom';
import Books from './pages/books.jsx';
import BookDetails from './pages/BookDetails.jsx';
import Quotes from './pages/Quotes.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
