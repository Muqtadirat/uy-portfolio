import azeezCard from "./images/Azeez-card.png";
import nnekaCard from "./images/Nneka-card.png";
import helenCard from "./images/Helen-card.png";
import yemiCard from "./images/Yemi-card.png";

function FaceCard({ imgSrc }) {
  const imgStyle = {
    width: "350px",
    height: "auto",
  };

  return (
    <div>
      <img src={imgSrc} alt="User Face Card" style={imgStyle} />
    </div>
  );
}

function UserPersona() {
  return (
    <div className="userPersona bg-greyscale-100">
      <div className="personaWrapper mx-6 md:mx-[72px] py-6 md:py-[80px] text-greyscale-40">
        <h2 className="text-greyscale-10 text-2xl md:text-5xl flex mb-4 md:mb-[40px] font-largescreen-largedisplay">
          User Personas
        </h2>

        <div className="userCard bg-greyscale-97 border rounded-[4px] border-greyscale-90 gap-[10px] mb-[40px]">
          <div className="azeezCard mx-6 md:mx-[72px] my-8 md:my-[56px] flex flex-col md:flex-row gap-6 md:gap-[70px]">
            <div className="flex flex-col items-start gap-[24px] text-[18px]">
              <FaceCard imgSrc={azeezCard} />
              <p className="text-greyscale-20 font-bold text-[24px]">
                Azeez Balogun
              </p>
              <div className="gap-[16px] flex flex-col items-start">
                <p>28 years</p>
                <p>Ikeja, Lagos</p>
                <p>Student</p>
              </div>
            </div>
            {""}
            <div className="userDetails flex flex-col gap-[56px] leading-[24px] text-base md:text-lg">
              <div className="wrapper flex flex-col md:flex-row gap-[32px] ">
                <div className="bio w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className=" font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Bio
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="frustration w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className=" font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Frustrations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
              {""}
              <div className="wrapper flex flex-col md:flex-row gap-[32px]">
                <div className="motivation w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Motivations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="goal w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className=" font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Goals
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
            </div>
          </div>
          {""}
        </div>
        {/* Second card */}

        <div className="userCard bg-greyscale-97 border rounded-[4px] border-greyscale-90 gap-[10px] mb-[40px]">
          <div className="nnenkaCard mx-6 md:mx-[72px] my-8 md:my-[56px] flex flex-col md:flex-row gap-6 md:gap-[70px]">
            <div className="flex flex-col items-start gap-[24px] text-[18px]">
              <FaceCard imgSrc={nnekaCard} />
              <p className="text-greyscale-20 font-bold text-[24px]">
                Ayomikun Nneka
              </p>
              <div className="gap-[16px] flex flex-col items-start">
                <p>36 years</p>
                <p>Ikeja, Lagos</p>
                <p>IT Professional</p>
              </div>
            </div>
            {""}
            <div className="userDetails flex flex-col gap-[56px] leading-[24px] text-base md:text-lg">
              <div className="wrapper flex flex-col md:flex-row gap-[32px] text-[18px]">
                <div className="bio w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Bio
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="frustration w-[296px] md:w-[367px] flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Frustrations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
              {""}
              <div className="wrapper flex flex-col md:flex-row gap-[32px] text-[18px]">
                <div className="motivation w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Motivations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="goal w-[296px] md:w-[367px] flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Goals
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
            </div>
          </div>
          {""}
        </div>

        {/* Third card */}

        <div className="userCard bg-greyscale-97 border rounded-[4px] border-greyscale-90 gap-[10px] mb-[40px]">
          <div className="helenCard mx-6 md:mx-[72px] my-8 md:my-[56px] flex flex-col md:flex-row gap-6 md:gap-[70px]">
            <div className="flex flex-col items-start gap-[24px] text-[18px]">
              <FaceCard imgSrc={helenCard} />
              <p className="text-greyscale-20 font-bold text-[24px]">
                Rashidat Helen
              </p>
              <div className="gap-[16px] flex flex-col items-start">
                <p>24 years</p>
                <p>Ikeja, Lagos</p>
                <p>Operation Specialist</p>
              </div>
            </div>
            {""}
            <div className="userDetails flex flex-col gap-[56px] leading-[24px] text-base md:text-lg">
              <div className="wrapper flex flex-col md:flex-row gap-[32px]">
                <div className="bio w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Bio
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="frustration w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Frustrations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
              {""}
              <div className="wrapper flex flex-col md:flex-row gap-[32px]">
                <div className="motivation w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Motivations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="goal w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Goals
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
            </div>
          </div>
          {""}
        </div>

        {/* Fourth card */}

        <div className="userCard bg-greyscale-97 border rounded-[4px] border-greyscale-90 gap-[10px] gap-x-[40px]">
          <div className="yemiCard mx-6 md:mx-[72px] my-8 md:my-[56px] flex flex-col md:flex-row gap-6 md:gap-[70px]">
            <div className="flex flex-col items-start gap-[24px] text-[18px]">
              <FaceCard imgSrc={yemiCard} />
              <p className="text-greyscale-20 font-bold text-[24px]">
                Yemi Hussain
              </p>
              <div className="gap-[16px] flex flex-col items-start">
                <p>50 years</p>
                <p>Ikeja, Lagos</p>
                <p>Design Lead</p>
              </div>
            </div>
            {""}
            <div className="userDetails flex flex-col gap-[56px] leading-[24px]">
              <div className="wrapper flex flex-col md:flex-row gap-[32px]">
                <div className="bio w-[296px] md:w-[367px] gap-4  flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Bio
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="frustration w-[296px] md:w-[367px] gap-4  flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Frustrations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
              {""}
              <div className="wrapper flex flex-col md:flex-row gap-[32px]">
                <div className="motivation w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Motivations
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>

                <div className="goal w-[296px] md:w-[367px] gap-4 flex flex-col text-left">
                  <p className="font-bold text-xl md:text-2xl font-largescreen-caption text-greyscale-20">
                    Goals
                  </p>
                  <p>
                    Phasellus in commodo purus. Nulla porta fringilla
                    vestibulum. Cras felis mauris, gravida sed egestas vitae,
                    sollicitudin vel est. Nullam sodales dapibus metus, eu
                    suscipit urna interdum vel. Sed quis elementum lectus, id
                    tristique leo. Phasellus tempus tincidunt dui. Mauris dictum
                    accumsan elit elementum condimentum.
                  </p>
                </div>
                {""}
              </div>
            </div>
          </div>
          {""}
        </div>
      </div>
    </div>
  );
}

export default UserPersona;
