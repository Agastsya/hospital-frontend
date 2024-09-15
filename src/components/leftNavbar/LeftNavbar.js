import "./LeftNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const leftNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <ul className="navbar-nav d-flex flex-column">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/patients">
            My Courses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ticket-booking">
            Messages
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/bedavailibility">
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/patienthealthrecord">
            Records
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/queue-status">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default leftNavbar;
