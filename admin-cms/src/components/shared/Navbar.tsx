import React, { useState } from "react";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "/logo.png";
type BoxShadow = string | null | undefined;
interface NavContainerProps {
  boxShadow?: BoxShadow | number | undefined;
  // other props...
}

interface NavContentProps {
  login?: string;
  signUp?: string;
  logout?: string;
}

const Navbar = (props: NavContentProps) => {
  const [scrollPos, setScrollPos] = useState(0);
  const location = useLocation();
  console.log(location.pathname);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavContainer boxShadow={scrollPos}>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/">
            <img src={logo} alt="logo" style={{ height: "3.5rem" }} />
          </NavLink>
        </div>
        {/* <ul className="nav-links">
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
        </ul> */}
        {/* <div className="nav-right nav-links">
          <NavLink to="/checkout" style={{ textDecoration: "none" }}>
            <h3>Cart</h3>
            <AiOutlineShoppingCart size="25" />
          </NavLink>
        </div> */}
      </div>
      <div className="auth-links">
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          {location.pathname === "/" ? (
            <section>
              <h3>{props?.login && props.login}</h3>
              <AiOutlineLogin size="25" />
            </section>
          ) : (
            ""
          )}
        </NavLink>
        <NavLink to="/register" style={{ textDecoration: "none" }}>
          {location.pathname === "/" ? (
            <section>
              <h3>{props?.signUp && props.signUp}</h3>
              <AiOutlineUserAdd size="25" />
            </section>
          ) : (
            ""
          )}
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          {location.pathname === "/dashboard" ? (
            <section>
              <h3>{props?.logout && props.logout}</h3>
              <AiOutlineUserAdd size="25" />
            </section>
          ) : (
            ""
          )}
        </NavLink>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav<NavContainerProps>`
  position: sticky;
  z-index: 999;
  top: 0;
  height: 5rem;
  width: auto;
  display: flex;
  background: white;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  box-shadow: ${(props: NavContainerProps) =>
    props.boxShadow ? "2px 2px 10px rgba(0,0,0,0.2)" : "none"};

  .auth-links {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    section {
      display: flex;
      gap: 1rem;
      text-align: center;
    }

    a {
      display: flex;
      gap: 1rem;
      align-items: center;
      color: white;
      justify-content: center;

      &:hover {
        color: #de9e49;
      }
    }
  }

  .nav-right {
    width: 20vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
      display: flex;
      gap: 0.5rem;
    }
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding-right: 3rem;
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
    color: white;

    text-decoration: none;
    a.active {
      border-bottom: 2px solid #de9e49;
    }

    a {
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0.5rem;
      color: white;

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
        color: white;

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
