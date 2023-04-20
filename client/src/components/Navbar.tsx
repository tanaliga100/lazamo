import { AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../public/logo.png";
import { links } from "../utils/constants";

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: "3.5rem" }} />
          </Link>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} style={{ textDecoration: "none" }}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-right">
          <h3>Cart</h3>
          <AiOutlineShoppingCart size="25" />
          <h3>Login</h3>
          <AiOutlineLogin size="25" />
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
    max-width: var(--max-width);
  }
  .nav-right {
    width: 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    list-style: none;
    text-decoration: none;
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
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
