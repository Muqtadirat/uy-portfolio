import Splitter from "./Splitter";
import Experience from "./Experience";

function HomePage() {
  return (
    <div className="HomePage bg-base-colorssurface flex flex-row justify-center w-full">
      <div className=" container bg-base-colorssurface w-[1512px] h-[6866px] relative">
        <div className="intro absolute">
          <div className="introName inline-flex flex-col items-start gap-[8px] absolute op-[149px] left-[72px]">
            <div className="text-wrapper relative w-fit mt-[-1.00px] font-[largescreen-mediumdisplay-font-family] text-[60px] text-greyscale-90 ">
              Hi, I’m
            </div>
            <div className="UTHMAN-YUSSUFF relative w-fit font-[largescreen-xlargedisplay-font-family] text-[120px] text-greyscale-100">
              UTHMAN
              <br />
              YUSSUFF
            </div>
            <p className="introDrive absolute w-[567px] top-[495px] left-[562px] font-[largescreen-body] text-greyscale-95">
              a result driven product designer with a proven record of
              incorporating and balancing user &amp; business needs into product
              development; with an in-depth experience in building functional,
              robust, resource-effective, scalable solutions. I am a strong
              advocate of data-driven decision making and obsessed with product
              research.
            </p>
          </div>
        </div>
      </div>
      <Splitter />
      <Experience />
    </div>
  );
}

export default HomePage;
