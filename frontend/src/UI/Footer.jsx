import FooterLink from './FooterLink'
import FacebookLogo from '../assets/Footer/FacebookLogo.svg'
import XLogo from '../assets/Footer/XLogo.svg'
import InstagramLogo from '../assets/Footer/InstagramLogo.svg'
import DiscordLogo from '../assets/Footer/DiscordLogo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image-container">
        <FooterLink img={FacebookLogo} alt="Facebook" />
        <FooterLink img={XLogo} alt="X" />
        <FooterLink img={InstagramLogo} alt="Instagram" />
        <FooterLink img={DiscordLogo} alt="Discord" />
      </div>
      <p>© 2024 All Rights Reserved to Quizzical Co.</p>
    </footer>
  )
}