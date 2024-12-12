import Express from "../../assets/express.jpeg";
import American from "../../assets/american.jpeg";
import Cappuccino from "../../assets/cappuccino.jpeg";

export const Coffees = [
  {
    id: 1,
    img: Express,
    name: "Espresso",
    description:
      "Um café forte e encorpado preparado sob alta pressão. É a base para diversas bebidas como cappuccino e latte.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: American,
    name: "Americano",
    description:
      "Um café suave feito diluindo um espresso em água quente, perfeito para quem prefere um sabor mais leve.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Cappuccino,
    name: "Cappuccino",
    description:
      "Uma combinação equilibrada de espresso, leite vaporizado e uma camada cremosa de espuma de leite.",
    aosDelay: "500",
  },
];
