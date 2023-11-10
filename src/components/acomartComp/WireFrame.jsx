import loginFrame from "./images/login-1.png";
import signupFrame from "./images/signUp.png";
import movieCat from "./images/movie-category.png";
import movieDetails from "./images/movie-details.png";
import movieCard from "./images/movie-card.png";
import movieList from "./images/my-list.png";
import seriesCat from "./images/Series-category.png";
import seriesCard1 from "./images/series-card.png";
import seriesCard2 from "./images/series-card2.png";
import seriesCard3 from "./images/series-card3.png";
import afrocinemaHome from "./images/Afrocinema.png";
import cinemaCard from "./images/Cinema Card.png";
import cinemaCard2 from "./images/Cinema Card-1.png";
import cinemaCard3 from "./images/Cinema Card-2.png";
import profile from "./images/Profile.png";
import moviedesktop from "./images/Movies-desktop.png";
import movieDeskCard from "./images/movieCard-desktop.png";
import seriesDesktop from "./images/Series-card-desktop.png";
import afrocinemaDesk from "./images/Afrocinema-2.png";

function WireframeImg({ imgSrc, imgAlt, height }) {
  const imgStyle = {
    width: "241px",
    height: `${height}px`,
  };

  return (
    <div>
      <img src={imgSrc} alt={imgAlt} style={imgStyle} />
    </div>
  );
}
function WireframeDesk({ imgSrc, height }) {
  const imgStyle = {
    width: "656px",
    height: `${height}px`,
  };

  return (
    <div>
      <img src={imgSrc} alt="Large screen wireframe" style={imgStyle} />
    </div>
  );
}

function WireFrame() {
  return (
    <div className="WireFrame mx-[72px]">
      <div className="flex mb-[88px] text-left gap-[32px]">
        <div className="font-largescreen-largedisplay text-greyscale-40 font-bold text-[24px] w-[668px]">
          Wireframe
        </div>

        <div className="w-[668px] text-greyscale-90 text-[18px]">
          <p>
            I have shown mid-high fidelity views of some of the screens across
            the different clients below.
          </p>
        </div>
      </div>

      <div className="frames flex flex-col">
        <div className="flex gap-[41px] mb-[88px]">
          <WireframeImg imgSrc={loginFrame} imgAlt="Login page" height={521} />
          <WireframeImg
            imgSrc={signupFrame}
            imgAlt="Sign up page"
            height={521}
          />
          <WireframeImg
            imgSrc={movieCat}
            imgAlt="Movie categories page"
            height={604}
          />
          <WireframeImg
            imgSrc={movieDetails}
            imgAlt="Movie details page"
            height={566}
          />
          <WireframeImg
            imgSrc={movieCard}
            imgAlt="Movie cast page"
            height={540}
          />
        </div>

        <div className="flex gap-[41px] mb-[88px]">
          <WireframeImg imgSrc={movieList} imgAlt="My list page" height={580} />
          <WireframeImg
            imgSrc={seriesCat}
            imgAlt="Series category page"
            height={586}
          />
          <WireframeImg
            imgSrc={seriesCard1}
            imgAlt="Series synopsis page"
            height={566}
          />
          <WireframeImg
            imgSrc={seriesCard2}
            imgAlt="Episodes page"
            height={654}
          />
          <WireframeImg
            imgSrc={seriesCard3}
            imgAlt="Series cast page"
            height={540}
          />
        </div>

        <div className="flex gap-[41px] mb-[88px]">
          <WireframeImg
            imgSrc={afrocinemaHome}
            imgAlt="Afrocinema homepage"
            height={521}
          />
          <WireframeImg imgSrc={cinemaCard} imgAlt="Movie card" height={791} />
          <WireframeImg imgSrc={cinemaCard2} imgAlt="Movie page" height={597} />
          <WireframeImg
            imgSrc={cinemaCard3}
            imgAlt="Reviews page"
            height={571}
          />
          <WireframeImg imgSrc={profile} imgAlt="Profile page" height={521} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="deskFrame flex mb-[100px] gap-[53px]">
          <WireframeDesk imgSrc={moviedesktop} height={667} />
          <WireframeDesk imgSrc={movieDeskCard} height={667} />
        </div>

        <div className="deskFrame flex gap-[53px]">
          <WireframeDesk imgSrc={seriesDesktop} height={844} />
          <WireframeDesk imgSrc={afrocinemaDesk} height={399} />
        </div>
      </div>
    </div>
  );
}

export default WireFrame;
