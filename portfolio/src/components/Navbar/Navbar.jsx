import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light fixed-top"
        style={{ backgroundColor: 'rgb(58, 108, 161)' }}
      >
        <div className="container">
          <a className="navbar-brand fs-1 fw-5 text-white" href="#">
            <ion-icon name="logo-skype"></ion-icon> Portfolio
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-sm-5">
              <li className="nav-item px-4">
                <a className="nav-link active fs-5 text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link active fs-5 text-white" href="#skills">Skills</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link active fs-5 text-white" href="#project">Projects</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link active fs-5 text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
