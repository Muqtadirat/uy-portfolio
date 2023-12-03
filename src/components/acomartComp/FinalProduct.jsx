import afroTvImg from "./images/afrostream-desk.png";
import afroMobileImg from "./images/afrostream-mobile.png";
import afroMacImg from "./images/afrocinema-mac.png";
import movieInfo from "./images/movie-info.png";
import jokerPhone from "./images/joker-iPhone.png";
import jokerTv1 from "./images/joker-TV1.png"
import jokerMac from "./images/joker-mac.png"
import jokerPhone2 from "./images/joker-iPhone2.png"
import jokerTv2 from "./images/joker-TV2.png"
import jokerPhone3 from "./images/joker-iPhone3.png"


function FinalProduct() {
  return (
    <div className="FinalProduct bg-greyscale-100 text-greyscale-10 mt-8 md:mt-[88px] h-auto leading-[24px]">
      <div className="mx-6 md:mx-[72px] text-base md:text-lg  pt-6 md:pt-[80px]">
        <h2 className="text-left font-medium text-2xl md:text-5xl font-largescreen-xlargedisplay leading-[48px]">
          Final Product
        </h2>

        <div className=" mt-10 md:mt-[62px] text-left">
          <p className=" mb-2 md:mb-4 font-bold text-greyscale-50">Afrostream</p>
          <p>
            Afrostream is the movie streaming section of the product, it was
            categorized into movies, series, my list & downloads
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-10 md:mt-[108px] gap-[213px] justify-center ">
          <div className="text-wrapper text-left w-[392px] mt-[92px] mb-[68px]">
            <p className="font-bold text-[24px] text-greyscale-10 mb-[16px]">
              Movies/Series
            </p>
            <p className="text-greyscale-40">
              This displayed movies on the server and functioned as an explorer
              for the user to interact with. <br />
              The card display with horizontal overflow was used because it is
              able to display multiple categories of content without causing
              clutter of the interface which was what was required for this
              product.
            </p>
          </div>

          <div className="flex">
            <img
              src={afroTvImg}
              alt="Tv display"
              style={{ width: "697px", height: "393px" }}
            />
            <img
              src={afroMobileImg}
              alt="Mobile view"
              style={{
                width: "245px",
                height: "400px",
                marginTop: "210px",
                marginLeft: "-150px",
              }}
            />
          </div>
        </div>

        <div className="mt-[160px] flex gap-[38px]">
          <div className="flex ml-[187px]">
            <img
              src={movieInfo}
              alt="Tv view"
              style={{ width: "697px", height: "393px" }}
            />
            <img
              src={afroMacImg}
              alt="PC view"
              style={{
                width: "454px",
                height: "266px",
                marginTop: "232px",
                marginLeft: "-900px",
              }}
            />
            <img
              src={jokerPhone}
              alt="Mobile view"
              style={{
                width: "245px",
                height: "400px",
                marginTop: "198px",
                marginLeft: "310px",
              }}
            />
          </div>

          <div className="text-wrapper text-right w-[392px] mt-[92px] mb-[68px]">
            <p className="font-bold text-[24px] text-greyscale-10 mb-[16px]">
              Exploring a movie/serie
            </p>
            <p className="text-greyscale-40">
              When a card is clicked, the synopsis and cast information of the
              movie/serie is displayed; with additional options of browsing
              episodes and seasons for series.
            </p>
          </div>
        </div>

        <div className="wrapper mt-[180px] text-left">
          <p className=" mb-4 font-bold text-[24px] text-greyscale-50">
            Afrocinema
          </p>
          <p className="text-greyscale-40">
            Afrocinema is the digital cinema of the product, it had features
            displaying movies on show and even a calendar to browse other dates
          </p>
        </div>

        <div className="mt-[60px] flex justify-end">
          <img
            src={jokerTv1}
            alt="Tv view"
            style={{ width: "697px", height: "393px" }}
          />
          <img
            src={jokerMac}
            alt="PC view"
            style={{
              width: "454px",
              height: "266px",
              marginTop: "232px",
              marginLeft: "-900px",
            }}
          />
          <img
            src={jokerPhone2}
            alt="Mobile view"
            style={{
              width: "245px",
              height: "400px",
              marginTop: "198px",
              marginLeft: "310px",
            }}
          />
        </div>

        <div className="flex mt-[155px] ml-[200px] justify-center gap-[35px]">
          <div className="flex">
            <img
              src={jokerTv2}
              alt="Tv view"
              style={{ width: "697px", height: "393px" }}
            />
            <img
              src={jokerMac}
              alt="PC view"
              style={{
                width: "454px",
                height: "266px",
                marginTop: "232px",
                marginLeft: "-900px",
              }}
            />
            <img
              src={jokerPhone3}
              alt="Mobile view"
              style={{
                width: "245px",
                height: "400px",
                marginTop: "198px",
                marginLeft: "310px",
              }}
            />
          </div>

          <div className="text-wrapper text-right self-center mt-[-150px]">
            <p className=" mb-4 font-bold text-[24px]">Ticketing</p>
            <p className="text-greyscale-40">
              Buy and pay for movie tickets right on your device
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default FinalProduct;
