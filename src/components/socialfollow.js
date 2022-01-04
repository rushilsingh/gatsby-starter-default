import React from "react";
import "./socialfollow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
    
export default function SocialFollow() {
  return (
    <div class="social-container">
<a href="https://www.linkedin.com/in/rushilsingh"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="4x" />
</a>
<a href="https://www.github.com/rushilsingh" className="github social">
  <FontAwesomeIcon icon={faGithub} size="4x" />
</a>
    </div>

  );
}
