import React from "react";
import { FooterContainer } from "./style";

function Footer() {
  return (
    <FooterContainer>
      Made by:{" "}
      <a href="https://github.com/DucSilva/mern-todo" target="_blank">
        {" "}
        Minh Duc Nguyen{" "}
      </a>
    </FooterContainer>
  );
}

export default Footer;
