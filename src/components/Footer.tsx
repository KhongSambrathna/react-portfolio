import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/khongsambrathna" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/khongsambrathna/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://t.me/sambrathnajr" target="_blank" rel="noreferrer"><TelegramIcon/></a>
      </div>
      <p>Copyright © 2026 Brathna.com All rights reserved.</p>
    </footer>
  );
}

export default Footer;