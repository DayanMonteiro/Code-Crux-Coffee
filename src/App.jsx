import AppStore from "./components/AppStore/AppStore";
import BestSellingCoffes from "./components/BestSellingCoffees/BestSellingCoffes";
import Footer from "./components/Footer/Footer";
import InteractiveBanner from "./components/InteractiveBanner/InteractiveBanner";
import Navbar from "./components/Navbar/Navbar";
import PremiumCoffee from "./components/PremiumCoffee/PremiumCoffee";
import Testimonial from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <InteractiveBanner />
      <BestSellingCoffes />
      <PremiumCoffee />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
