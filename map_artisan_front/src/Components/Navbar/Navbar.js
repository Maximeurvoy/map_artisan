import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* <p>Navbar</p> */}
      {/* <Link to='/formartisan'>form artisan</Link>
      <Link to='/setting'>setting</Link>
      <Link to='/'>home page</Link> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <Link className="navbar-brand text-white" to='/'>Accueil</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="navbar-brand text-white" to='/formartisan'>Renseigner un nouvel artisan</Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand text-white" to='/listeartisan'>Tous nos artisans</Link>
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand text-white" to='/avis'>Laisser votre avis</Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand text-white" to='/setting'>Réglage</Link>
            </li>


          </ul>
        </div>
      </nav>

    </>
  )
};

export default Navbar;