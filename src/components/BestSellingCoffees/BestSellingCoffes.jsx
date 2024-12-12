import "./best-selling-coffees.css";
import { Coffees } from "./mock-coffees";

const BestSellingCoffes = () => {
  return (
    <div className="BestSellingCoffes">
      <div className="container-best-selling-coffees">
        <div className="heading-section">
          <h2 className="section-title">Você merece o melhor café</h2>
        </div>

        <div className="container-cards">
          {Coffees.map((service) => (
            <div className="card" key={service.id}>
              <div className="container-image">
                <img className="image" src={service.img} alt="modelo do café" />
              </div>
              <div className="text-section">
                <h3 className="coffee-name">{service.name}</h3>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingCoffes;
