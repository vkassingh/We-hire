import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>Wehire</h1>

      <div className="menus">
        <NavLink
          to="/signup"
          className={(navData) =>
            navData.isActive ? "nav-link my-nav-link" : "nav-link"
          }
        >
          Sign up
        </NavLink>
        <NavLink
          to="/login"
          className={(navData) =>
            navData.isActive ? "nav-link disabled" : "nav-link"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/portfolio"
          className={(navData) =>
            navData.isActive ? "nav-link disabled" : "nav-link"
          }
        >
          Portfolio-Login
        </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
