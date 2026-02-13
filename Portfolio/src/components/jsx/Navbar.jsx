import "../css/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> Lukhman </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="btn">Hire Me</button>
    </nav>
  );
}

export default Navbar;
