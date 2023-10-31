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
      <div className=" absolute bg-greyscale-20 h-[2673px] w-[1512px] left-0 top-[1822px]">
        <div className="absolute w-[843px] h-[2260px] top-[333px] left-[597px]">
          {" "}
          <div className="wrapper flex flex-col absolute items-start text-greyscale-90 top-[40px] w-[843px] gap-[72px]">
            {/* <div className="columns-container h-[700px] overflow-y-auto"> */}
            <div className="relative w-[829px] h-[300px]">
              <div className="absolute w-[318px] top-[38px] text-[32px]">
                Jul 21' - Present
              </div>

              <div className="inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="relative w-fit font-largescreen-subheading text-[32px] font-black">
                    Aufera
                  </div>
                  <div className="relative w-fit font-largescreen-subheading font-black text-[24px]">
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
                    Responsible for planning product strategy, leading research
                    and interface design efforts.
                  </li>
                  <li>
                    Collaborate and synchronise with frontend, mobile app and
                    backend developers.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[829px] h-[540px]">
              <div className="absolute w-[318px] top-[38px] text-[32px]">
                Mar 22' - Present
              </div>

              <div className="inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="relative w-fit font-largescreen-subheading font-black text-[32px] text-left">
                    Mecho Autotech Ltd (YC21)
                  </div>
                  <div className="relative w-fit font-largescreen-subheading font-black text-[24px]">
                    Product Designer
                  </div>
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Interaction Design" />
                  <UtilityLabel text="User Research" />
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Perfomance Metrics" />
                  <UtilityLabel text="Mixpanel" />
                </div>

                <ul className=" text-left list-disc relative w-[421px]">
                  At Mecho
                  <li>
                    I lead the product design teaem where I ensure efficient and
                    effective work and communucation within the design team as
                    well as with external teams.
                  </li>
                  <li>
                    I monitor and review UX metrics to identify bottlenecks
                    onproduct features which is then used to drive design,
                    business and product decisions.
                  </li>
                  <li>
                    I led the efforts to build the foundation of a scalable
                    design system for internal and external tools.
                  </li>
                  <li>
                    I carry out user research and usablity tests to collect data
                    used as reference for product upgrades and feature build.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[829px] h-[252px]">
              <div className="absolute w-[318px] top-[38px] text-[32px]">
                Oct 21' - Feb 22'
              </div>

              <div className="inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="relative w-fit font-largescreen-subheading font-black text-[32px]">
                    Casa
                  </div>
                  <div className="relative w-fit font-largescreen-subheading font-black text-[24px]">
                    Product Designer
                  </div>
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Interaction Design" />
                  <UtilityLabel text="User Research" />
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Figma" />
                </div>

                <ul className=" text-left relative w-[421px]">
                  <li>
                    I worked with the founders to design and develop the
                    startup's Edtech mobile application with scalable design
                    systems and libraries.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[829px] h-[252px]">
              <div className="absolute w-[318px] top-[38px] text-[32px]">
                Nov 21' - Jan 22'
              </div>

              <div className="inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="relative w-fit font-largescreen-subheading font-black text-[32px]">
                    Ocity
                  </div>
                  <div className="relative w-fit font-largescreen-subheading font-black text-[24px]">
                    UI/UX Designer
                  </div>
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Interaction Design" />
                  <UtilityLabel text="User Research" />
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Figma" />
                </div>

                <ul className=" text-left relative w-[421px]">
                  <li>
                    I worked with the founders to design and develop the
                    startup's Edtech mobile application with scalable design
                    systems and libraries.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[829px] h-[264px]">
              <div className="absolute w-[318px] top-[38px] text-[32px]">
                Oct 20' - Jan 22'
              </div>

              <div className="inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="relative w-fit font-largescreen-subheading font-black text-[32px] text-left">
                    Africa Content Market <br />
                    Limited (ACOMART)
                  </div>
                  <div className="relative w-fit font-largescreen-subheading text-[24px] font-black">
                    Product Designer
                  </div>
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Interaction Design" />
                  <UtilityLabel text="Figma" />
                </div>

                <ul className=" text-left relative w-[421px]">
                  <li>
                    I worked with the product and engineering team to design and
                    develop streaming services and features that helped the
                    company push to mark and attract it's first users.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-[829px] h-[252px]">
              <div className="absolute w-[318px] top-[38px] text-[32px]">
                Jul 20' - May 21'
              </div>

              <div className="inline-flex flex-col items-start absolute gap-[16px] top-0 left-[406px]">
                <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
                  <div className="relative w-fit font-largescreen-subheading font-black text-[32px]">
                    Doctoora
                  </div>
                  <div className="relative w-fit font-largescreen-subheading text-[24px] font-black">
                    Product Graphic Designer
                  </div>
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Interaction Design" />
                  <UtilityLabel text="Adobe XD" />
                </div>
                <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
                  <UtilityLabel text="Figma" />
                  <UtilityLabel text="Photoshop" />
                  <UtilityLabel text="Illustrator" />
                </div>

                <ul className=" text-left relative w-[421px]">
                  <li>
                    I designed telemedicine products and features at MVP stages
                    that helped the company attract it's first users and achieve
                    product market fit.
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="w-[472px] h-[160px] top-[13px] left-16 absolute">
          <div className="absolute top-0 left-0 text-[80px] font-black text-left font-largescreen-largedisplay text-greyscale-100">
            WORK <br /> EXPERIENCE
          </div>
        </div>

        <div className="absolute left-[72px] top-[277px] text-greyscale-95 rounded-[4px] flex w-fit justify-center items-center px-10 py-6 bg-base-colorsprimary-blue hover:bg-base-colorssecondary-blue cursor-pointer">
          <button>Download my resume</button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
