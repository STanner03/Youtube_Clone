import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import dCCLogo from '../../Assets/dCC_Transparent_White.png'

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b><img src={dCCLogo}
                alt='dCC Logo' 
                className="img">
                </img>S&A YouTube Clone</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <div className="navbar-buttons">
              <button className="login-button" onClick={() => navigate("/login")}>Login</button>
              <button className="register-button" onClick={() => navigate("/register")}>Regiser</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
