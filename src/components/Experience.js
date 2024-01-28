import { motion } from "framer-motion";

function UtilityLabel({ text }) {
  return (
    <div className="px-4 md:px-6 py-1 md:py-2 rounded relative bg-greyscale-30">
      <div className="relative w-fit">{text}</div>
    </div>
  );
}

const Experience = () => {
  return (
    <div className="Experience text-left w-full md:max-w-full h-full md:flex md:gap-14 bg-greyscale-20 pt-16 md:pt-24 pb-6 md:pb-20 px-6 md:px-[4.5rem] font-largescreen-body text-base md:text-lg text-white leading-[24px]">
      <section>
        <h1 className="header text-5xl md:text-[5rem] pb-4 md:w-[30rem] uppercase font-black text-left">
          Work Experience
        </h1>

        <button className="px-6 py-4 md:py-6 text-xs md:text-base flex font-bold leading-6 bg-base-colorsprimary-blue hover:bg-base-colorssecondary-blue rounded">
          Download my resume
        </button>
      </section>

      <div className="project-details md:ml-[54px] md:flex flex-col gap-[2rem] items-end mt-[3.5rem] md:mt-[23.5rem] text-xl md:text-[2rem] md:w-[843px] leading-9 text-greyscale-90 overflow-x-scroll md:overflow-auto">
        <section className="aufera md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 text-left font-bold md:w-2/5">
            Jul 21’ - Present
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Aufera
            </p>
            <p className="md:text-2xl font-bold">Product Design Lead</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base md:text-lg text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Figma" />
              <UtilityLabel text="User Testing" />
              <UtilityLabel text="Leadership" />
            </div>

            <ul className="text-base md:text-lg list-disc mt-4">
              At Aufera
              <li className="ml-6 mb-1">
                Responsible for planning product strategy, leading research and
                interface design efforts.
              </li>
              <li className="ml-6">
                Collaborate and synchronise with frontend, mobile app and
                backend developers.
              </li>
            </ul>
          </div>
        </section>

        {/* mecho */}
        <section className="mecho mt-5 md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 mt-4 text-left font-bold  md:w-2/5">
            Mar 22’ - Present
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Mecho Autotech Ltd (YC21)
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base md:text-lg text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Performance metrics" />
              <UtilityLabel text="Mixpanel" />
            </div>

            <ul className="text-base md:text-lg list-disc mt-4">
              At Mecho
              <li className="ml-6 mb-1">
                I lead the product design team where I ensure efficient and
                effective work and communication within the product design team
                as well as with external teams.
              </li>
              <li className="ml-6">
                I monitor and review UX metrics to identify bottlenecks on
                product features which is then used to drive design, business
                and product decisions.
              </li>
              <li className="ml-6">
                I led the efforts to build the foundation of a scalable design
                system for internal and external tools.
              </li>
              <li className="ml-6">
                I carry out user research and usability tests to collect data
                used as reference for product upgrades and feature build.
              </li>
            </ul>
          </div>
        </section>

        {/* Casa */}
        <section className="casa md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 mt-4 text-left font-bold md:w-2/5">
            Oct 21’ - Feb 22’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold md:w-2/5">
              Casa
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base md:text-lg text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Figma" />
            </div>

            <p className="text-base md:text-lg">
              I worked with the founders to design and develop the startup's
              Edtech mobile application with scalable design systems and
              libraries.
            </p>
          </div>
        </section>

        {/* Ocity */}
        <section className="ocity md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 mt-4 text-left font-bold md:w-2/5">
            Nov 21’ - Jan 22’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">Ocity</p>
            <p className="md:text-2xl font-bold">UI/UX Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base md:text-lg text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Figma" />
            </div>

            <p className="text-base md:text-lg">
              I worked with the founders to design and develop the startup's
              Edtech mobile application with scalable design systems and
              libraries.
            </p>
          </div>
        </section>

        {/* acomart */}
        <section className="acomart md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 mt-4 text-left font-bold md:w-2/5">
            Oct 20’ - Jan 22’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Africa Content Market Limited (ACOMART)
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base md:text-lg text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="Figma" />
            </div>

            <p className="text-base md:text-lg">
              I worked with the product and engineering team to design and
              develop streaming services and features that helped the company
              push to market and attract it's first users.
            </p>
          </div>
        </section>

        {/* doctoora */}
        <section className="doctoora md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 mt-4 text-left font-bold md:w-2/5">
            Jul 20’ - May 21’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Doctoora
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base md:text-lg text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="Adobe XD" />
              <UtilityLabel text="Figma" />
              <UtilityLabel text="Photoshop" />
              <UtilityLabel text="Illustrator" />
            </div>

            <p className="text-base md:text-lg">
              I designed telemedicine products and features at MVP stages that
              helped the company attract it’s first users and achieve product
              market fit.
            </p>
          </div>
        </section>
      </div>

      <p className="md:hidden mt-5 italic text-xs leading-[18px] text-greyscale-50">
        Scroll left for more
      </p>
    </div>
  );
};

export default Experience;
