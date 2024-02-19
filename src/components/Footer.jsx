import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <nav>
        <FooterA href="https://github.com/DecidedCard" target="blank">
          Github
        </FooterA>
        <FooterA href="https://velog.io/@decidedcard/posts" target="blank">
          Blog
        </FooterA>
      </nav>
      <FooterP>
        <FooterSpan>만든이 : 정해준</FooterSpan>
        <FooterSpan>이메일 : qube7089@naver.com</FooterSpan>
      </FooterP>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.footer`
  width: 100%;
  height: 50px;
  bottom: 0px;
  border-top: 1px solid #f6b17a;
  font-size: 11px;
`;

const FooterA = styled.a`
  display: inline-block;
  margin: 0px 20px 10px 20px;
  color: #f6b17a;
  font-size: 11px;
  text-decoration: none;
  margin-top: 5px;
`;

const FooterP = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

const FooterSpan = styled.span`
  display: inline-block;
  margin-left: 20px;
  color: #f6b17a;
`;
