import React from "react";
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    //this is how we use bootstrap components(navbar here).
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          {/* dont forget javscript that we write inside JSX always goes inside curly braces for e.g props.title */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

//propTypes(tell us the type of props) set up. if we didnot passed the title property in app.js module under Navbar component, it will through 
//an error because of isRequired keyword.
// Navbar.propTypes = 
// {title:PropTypes.string.isRequired,
//  aboutText:PropTypes.string
// };


//if we want to set up default propTypes, they will shown up on the browser 
//when we havn't given any values to the properties in app.js module
Navbar.defaultProps = 
{title: 'Set title here',
 aboutText:'Set aboutText here'
};