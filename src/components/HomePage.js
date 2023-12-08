import Splitter from "./Splitter";
import Experience from "./Experience";
import Projects from "./Projects";
import bgImg from "../images/intro-bg.png"

function HomePage() {
  return (
    <div className="HomePage bg-base-colorssurface w-full md:max-w-full h-[6866px]">
      <div className="container relative ">
        <div
          className="intro absolute mx-6 md:mx-[72px] h-auto"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="introName mt-[108px] md:mt-[149px] font-largescreen-largedisplay text-left">
            <div className="text-wrapper font-extrabold mb-4 md:mb-2 text-3xl md:text-[60px] leading-8 md:leading-[64px] text-greyscale-90 ">
              Hi, I’m
            </div>
            <div className="UTHMAN-YUSSUFF font-black mb-4 md:mb-5 text-5xl md:text-[120px] text-greyscale-100">
              UTHMAN
              <br />
              YUSSUFF
            </div>
            {/* <p className="introDrive absolute w-[567px] top-[495px] left-[562px] font-[largescreen-body] text-greyscale-95"> */}
            <p className="introDrive relative text-left text-base md:text-lg leading-6 w-[345px] md:w-[567px] md:ml-[562px] font-largescreen-body text-greyscale-95">
              a result driven product designer with a proven record of
              incorporating and balancing user &amp; business needs into product
              development; with an in-depth experience in building functional,
              robust, resource-effective, scalable solutions. I am a strong
              advocate of data-driven decision making and obsessed with product
              research.
            </p>
          </div>
        </div>
        {/* <Splitter /> */}
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
