import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https/twitter.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https/twitter.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https/twitter.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
