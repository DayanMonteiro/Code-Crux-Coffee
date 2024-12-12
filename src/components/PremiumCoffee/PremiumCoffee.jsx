import PremiumCoffeeImg from "../../assets/premium-coffee.jpeg";
import CoffeeUltraSpecial from "../../assets/coffee-ultra-special.jpeg";
import { GiCoffeeBeans } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";
import "./premium-coffee.css";

const PremiumCoffee = () => {
  return (
    <div className="PremiumCoffee">
      <div className="container-premium-coffee">
        <div className="container-image">
          <img
            src={PremiumCoffeeImg}
            alt="imagem de café"
            className="image-premium-coffee"
          />
        </div>

        <div className="text-content-section">
          <div className="title-section">
            <h2>Café Premium Blend</h2>
            <p>
              Um café de sabor marcante e qualidade excepcional. Cultivado com
              grãos selecionados para proporcionar ma experiência unica e
              inesquecível a cada xícara. Ideal para quem aprencia um café de
              alto padrão, com notas ricas e aromas envolventes.
            </p>
          </div>

          <div className="premium-icon">
            <div className="specials">
              <div className="content-specials">
                <div className="circle">
                  <GiCoffeeBeans />
                </div>
                <span className="type-of-coffee">Café Premium</span>
              </div>

              <div className="content-specials">
                <div className="circle">
                  <GiCoffeeCup />
                </div>
                <span className="type-of-coffee">Cafés Quentes</span>
              </div>

              <div className="content-specials">
                <div className="circle">
                  <FaCoffee />
                </div>
                <span className="type-of-coffee">Cafés Frios</span>
              </div>
            </div>

            <div className="tea-lovers">
              <h2>Amantes de chá</h2>
              <p>
                Também temos uma linha exclusiva de chás especiais,perfeitos
                para quem busca novas experiências e sabores únicos. Venha
                conhecer nossas opções.
              </p>
            </div>
          </div>
          <div className="special-lines">
            <h2>Linhas Especiais de Cafés e Chás</h2>
            <p>
              Nossa cafeteria se orgulha de oferecer uma seleção especial de
              cafés e chás, cuidadosamente escolhidos para agradar os paladares
              mais exigentes. Cada xícara é uma verdadeira experiência, com
              sabores únicos e notas que encantam. Venham se apaixonar ainda
              mais pela arte do café e chá em nossa cafeterua, onde qualidade e
              paixão se encontram em cada gole.
            </p>
          </div>
        </div>

        <div className="container-image-ultra-special">
          <img
            src={CoffeeUltraSpecial}
            alt="imagem de café especial"
            className="image-premium-coffee"
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumCoffee;
