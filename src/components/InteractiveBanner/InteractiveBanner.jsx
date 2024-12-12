import "./interactive-banner.css";
import BannerImage from "../../assets/banner-image.png";

const InteractiveBanner = () => {
  return (
    <div className="InteractiveBanner">
      <div className="interactive-banner-container">
        {/* text-content-section */}
        <div className="text-content-section">
          <h1>
            Servimos o <span>Café</span> gostoso da cidade
          </h1>
          <h2>
            E se quiser trabalhar temos <span>Coworking</span> equipado com
            segunda tela
          </h2>
          <p>
            Ideal para você e sua equipe passarem um dia inesquecível em um
            ambiente inspirador
          </p>
          <div className="container-button">
            <button className="primary-button">Café & Code</button>
          </div>
        </div>
        {/* image-section */}
        <div className="image-section">
          <div className="code">
            <button className="primary-button">Agendar Coworking</button>
          </div>
          <div className="image-coffee">
            <img src={BannerImage} alt="imagem de um café" />
          </div>
          <div className="coffee">
            <button className="primary-button">Beba seu Café</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBanner;
