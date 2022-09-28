import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navBar">
    <h2>Math Magicians</h2>
    <div className="navBar-menu" id="navbarNav">
      <ul className="navBar-Nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/quote">
            Quotes
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
