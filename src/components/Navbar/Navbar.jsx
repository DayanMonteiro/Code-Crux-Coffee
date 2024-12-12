import Logo from "../../assets/website/logo.svg";
import { Menu } from "./menuitem";
import { FaCoffee } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="container-logo">
          <a href="/" className="redirect-link">
            <img src={Logo} alt="Logo" className="image-logo" />
            <div className="content-text">
              <span className="text-logo">Code Crux</span>
              <span className="text-logo">Coworking Cafe</span>
            </div>
          </a>
        </div>
        {/* Link section */}
        <div className="container-links">
          <ul className="list-links">
            {Menu.map((menu) => (
              <li key={menu.id} className="link">
                <a href={menu.link} className="link-name">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="cart-button">
            Carrinho
            <FaCoffee />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
