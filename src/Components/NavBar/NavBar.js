// src/Components/NavBar/NavBar.js


// --- NavBar Component ---
// Receives the currently active section ID (e.g., 'about', 'skills') as a prop.
function NavBar({ activeSection }) { 
  const currentActive = activeSection;

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="navbar-container">
      <a href="#hero" className="logo">
        Hava Haviv
      </a>

      <nav className="nav-links">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}

            className={currentActive === link.href.substring(1) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;