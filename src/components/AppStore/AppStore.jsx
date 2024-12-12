import AppStoreImg from "../../assets/website/app_store.png";
import PlayStore from "../../assets/website/play_store.png";
import "./app-store.css";

const AppStore = () => {
  return (
    <div className="AppStore">
      <div className="back-image">
        <div className="container-text-app-store">
          <h2 className="title-app-store">
            Code Crux Coworking Café está disponível para Android e IOS
          </h2>

          <div className="container-images">
            <a href="/">
              <img
                src={PlayStore}
                alt="Play Store"
                className="appstore-image"
              />
            </a>
            <a href="/">
              <img
                src={AppStoreImg}
                alt="App Store"
                className="appstore-image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
