import { Link } from "react-router-dom";

function Nav() {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link  className="navbar-brand" to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link  className="navbar-brand" to='/all'>All Movies</Link>
        </li>
       
      </ul>
      <span className="navbar-text">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </span>
    </div>
  </div>
</nav>

  
  );
}

export default Nav;
