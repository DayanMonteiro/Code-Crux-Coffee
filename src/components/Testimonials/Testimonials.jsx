import Slider from "react-slick";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from "./testimonial";

const Testimonial = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Testimonial">
      <div className="container">
        <div className="testimonial-title">
          <h2>Depoimentos</h2>
        </div>

        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="testimonial-card" key={data.id}>
                <div className="card">
                  <div className="image-section">
                    <img src={data.img} alt="foto do cliente" />
                  </div>
                  <div className="text-section">
                    <p className="tesmimony">{data.text}</p>
                    <p className="customer-name">{data.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
