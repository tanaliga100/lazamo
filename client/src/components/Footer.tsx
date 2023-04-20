import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">FAQ</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
        <FooterLink href="#">Terms</FooterLink>
        <FooterLink href="#">Privacy</FooterLink>
        <FooterLink href="#">Returns</FooterLink>
      </FooterLinks>
      <FooterCopy>
        &copy; 2023 All rights reserved
        <p>Powered with MongoDB | Express | React | Node | Typescript</p>
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  color: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0; */
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopy = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 10px;

  & p {
    opacity: 0.5;
    padding-top: 1rem;
  }
`;
