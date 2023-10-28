function UtilityLabel({ text }) {
  return (
    <div className=" inline-flex h-12 items-center justify-center gap-10 px-9 py-4 rounded-[4px] relative bg-greyscale-30 flex-[0 0 auto]">
      <div className="relative w-fit">{text}</div>
    </div>
  );
}

function Experience() {
  return (
    <div className="Experience">
      <div className=" absolute border bg-greyscale-20 h-[2673px] w-[1512px] left-0 top-[1822px]">
        <div className="absolute border w-[843px] h-[2260px] top-[333px] left-[597px]">
          {" "}
          <div className="wrapper border flex flex-col absolute items-start text-greyscale-90 top-[40px] w-[843px] gap-[72px]">
            <div className="border relative w-[829px] h-[300px]">
              <div className="border absolute w-[318px] top-[38px]">
                Jul 21 - Present
              </div>

              <div className="border inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="border inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="border relative w-fit font-largescreen-subheading f-[32px] font-black">
                    Aufera
                  </div>
                  <div className="border relative w-fit font-largescreen-subheading f-[32px] font-black">
                    Product Design Lead
                  </div>
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Interaction Design" />
                  <UtilityLabel text="User Research" />
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Figma" />
                  <UtilityLabel text="User Testing" />
                  <UtilityLabel text="Leadership" />
                </div>

                <ul className=" text-left list-disc relative w-[421px]">
                  At Aufera
                  <li>
                    Responsible for planning product strategy, leading research and interface design efforts
                  </li>
                  <li>Collaborate and synchronise with frontend, mobile app and backend developers</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
