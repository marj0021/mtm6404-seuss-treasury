import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}

export default Navbar;
