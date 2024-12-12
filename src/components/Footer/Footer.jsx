import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "Sobre Nós", link: "/#" },
  { title: "Contato", link: "/#" },
  { title: "Blog", link: "/#" },
];

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="company-detail">
          <h2 href="/#" className="company">
            Code Crux Coworking Café
          </h2>
          <p className="company-description">
            Café Artesanal, Vibes Aconchegantes, Momentos Inesquecíveis - Sua
            Foga Perfeita Para Um Espresse ou Um Dia Produtivo.
          </p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="youtube-channel"
          >
            Visite nosso canal no YouTube
          </a>
        </div>

        <div className="footer-links">
          <div className="important-links">
            <h2 className="title-important-links">Links Importantes</h2>
            <ul className="footer-links">
              {FooterLinks.map((data) => (
                <li key={data.title}>
                  <a href={data.link} className="link-name">
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="address">
            <h2 className="title-address"> Endereço</h2>
            <div>
              <p>Av. Paulista n°1020 - SP</p>
              <p>(11) 99988-7788</p>

              <div className="social-links">
                <a href="/#">
                  <FaInstagram className="social-icons" />
                </a>
                <a href="/#" className="social-icons">
                  <FaFacebook className="social-icons" />
                </a>
                <a href="/#" className="social-icons">
                  <FaLinkedin className="social-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
