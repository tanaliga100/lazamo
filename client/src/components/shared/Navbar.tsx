import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../public/logo.png";
import { links } from "../../utils/constants";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="logo" style={{ height: "3.5rem" }} />
          </NavLink>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url} style={{ textDecoration: "none" }}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav-right">
          <NavLink to="/checkout" style={{ textDecoration: "none" }}>
            <h3>Cart</h3>
            <AiOutlineShoppingCart size="25" />
          </NavLink>
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <h3>Login</h3>
            <AiOutlineLogin size="25" />
          </NavLink>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  position: sticky;
  z-index: 999;
  top: 0;
  height: 5rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 80vw;
    margin: 0 auto;
  }
  .nav-right {
    width: 20vw;
    display: flex;
    justify-content: space-around;
    align-items: center;

    * {
      display: flex;
      gap: 1rem;
    }
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    list-style: none;
    text-decoration: none;
    a.active {
      border-bottom: 2px solid #de9e49;
    }

    a {
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid #de9e49;
      }
    }
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        text-decoration: none;
      }
      a {
        font-size: 1rem;
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid #de9e49;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
