import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav>
      <ul>
        <li><button><Link to="/" className="nav-item">Home</Link></button></li>
        <li><button><Link to="/about-us" className="nav-item">About</Link></button></li>
        <li><button><Link to="/menu" className="nav-item">Menu</Link></button></li>
        <li><button><Link to="/booking-page" className="nav-item">Reservations</Link></button></li>
        <li><button><Link to="/order-online" className="nav-item">Order Online</Link></button></li>
        <li><button><Link to="/login" className="nav-item">Login</Link></button></li>
      </ul>
    </nav>
      )
}

export default Nav;

