import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const navbarCollapse = navbar?.querySelector('.navbar-collapse');

    const toggleNavbar = () => {
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    };

    navbar?.querySelector('.navbar-toggler')?.addEventListener('click', toggleNavbar);

    return () => {
      navbar?.querySelector('.navbar-toggler')?.removeEventListener('click', toggleNavbar);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid" ref={navbarRef}>
        <Link to="/" className="navbar-brand">Musical Hendrix</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link${location.pathname === "/" ? " active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/donde-estamos"
                className={`nav-link${location.pathname === "/donde-estamos" ? " active" : ""}`}
              >
                Donde Estamos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/productos"
                className={`nav-link${location.pathname === "/productos" ? " active" : ""}`}
              >
                Productos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
