export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        {" "}
        Race Wars
      </a>
      <ul>
        <li>
          <a href="/signup">Race Sign up</a>
        </li>
        <li>
          <a href="/raceList">Racers</a>
        </li>
        <li>
          <a href="/tracks">Tracks</a>
        </li>
      </ul>
    </nav>
  );
}
