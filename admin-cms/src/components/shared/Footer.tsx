import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: transparent;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #999;
  text-align: center;
  background-color: transparent;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2022 Lazamo. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
