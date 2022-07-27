import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        {" "}
        Race Wars
      </Link>
      <ul>
        <li>
          <Link to="/signUp">Race Sign up</Link>
        </li>
        <li>
          <Link to="/raceList">Racers</Link>
        </li>
        <li>
          <Link to="/tracks">Tracks</Link>
        </li>
      </ul>
    </nav>
  );
}
