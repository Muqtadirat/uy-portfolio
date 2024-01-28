import { motion } from "framer-motion";

function UtilityLabel({ text }) {
  return (
    <div className="px-4 md:px-6 py-1 rounded relative bg-greyscale-30">
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

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Figma" />
              <UtilityLabel text="User Testing" />
              <UtilityLabel text="Leadership" />
            </div>

            <ul className="text-base list-disc mt-4">
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
          <p className="mb-10 text-left font-bold  md:w-2/5">
            Mar 22’ - Present
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Mecho Autotech Ltd (YC21)
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Performance metrics" />
              <UtilityLabel text="Mixpanel" />
            </div>

            <ul className="text-base list-disc mt-4">
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
          <p className="mb-10 text-left font-bold md:w-2/5">
            Oct 21’ - Feb 22’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold md:w-2/5">
              Casa
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Figma" />
            </div>

            <p>
              I worked with the founders to design and develop the startup's
              Edtech mobile application with scalable design systems and
              libraries.
            </p>
          </div>
        </section>

        {/* Ocity */}
        <section className="ocity md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 text-left font-bold md:w-2/5">
            Nov 21’ - Jan 22’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">Ocity</p>
            <p className="md:text-2xl font-bold">UI/UX Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="User Research" />
              <UtilityLabel text="Figma" />
            </div>

            <p>
              I worked with the founders to design and develop the startup's
              Edtech mobile application with scalable design systems and
              libraries.
            </p>
          </div>
        </section>

        {/* acomart */}
        <section className="acomart md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 text-left font-bold md:w-2/5">
            Oct 20’ - Jan 22’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Africa Content Market Limited (ACOMART)
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="Figma" />
            </div>

            <p>
              I worked with the product and engineering team to design and
              develop streaming services and features that helped the company
              push to market and attract it's first users.
            </p>
          </div>
        </section>

        {/* doctoora */}
        <section className="doctoora md:flex items-baseline w-[345px] md:w-full">
          <p className="mb-10 text-left font-bold md:w-2/5">
            Jul 20’ - May 21’
          </p>
          <hr className="md:hidden" />

          <div className="md:w-3/5">
            <p className="mt-7 mb-2 text-2xl md:text-[2rem] font-bold">
              Doctoora
            </p>
            <p className="md:text-2xl font-bold">Product Designer</p>

            <div className="flex flex-wrap my-4 gap-[10px] mt-4 text-base text-greyscale-60">
              <UtilityLabel text="Interaction Design" />
              <UtilityLabel text="Adobe XD" />
              <UtilityLabel text="Figma" />
              <UtilityLabel text="Photoshop" />
              <UtilityLabel text="Illustrator" />
            </div>

            <p>
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

// function Experience() {
//   return (
//     <div className="Experience">
//       {/* <div className=" absolute bg-greyscale-20 h-[2673px] w-[1512px] left-0 top-[1822px]">
//         <div className="absolute w-[843px] h-[2260px] top-[333px] left-[597px]"> */}
//       <div className=" bg-greyscale-20 w-full md:max-w-full">
//         <div className=" w-[843px]">
//           {" "}
//           <div className="wrapper flex flex-col items-start text-greyscale-90 top-[40px] w-[843px] gap-[72px]">
//             {/* <div className="columns-container h-[700px] overflow-y-auto"> */}
//             <div className="relative w-[829px] h-[300px]">
//               <div className=" w-[318px] top-[38px] text-[32px]">
//                 Jul 21' - Present
//               </div>

//               <div className="inline-flex flex-col items-start gap-[16px] top-0 left-[406px]">
//                 <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
//                   <div className="relative w-fit font-largescreen-subheading text-[32px] font-black">
//                     Aufera
//                   </div>
//                   <div className="relative w-fit font-largescreen-subheading font-black text-[24px]">
//                     Product Design Lead
//                   </div>
//                 </div>
//                 <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Interaction Design" />
//                   <UtilityLabel text="User Research" />
//                 </div>
//                 <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Figma" />
//                   <UtilityLabel text="User Testing" />
//                   <UtilityLabel text="Leadership" />
//                 </div>

//                 <ul className=" text-left list-disc relative w-[421px]">
//                   At Aufera
//                   <li>
//                     Responsible for planning product strategy, leading research
//                     and interface design efforts.
//                   </li>
//                   <li>
//                     Collaborate and synchronise with frontend, mobile app and
//                     backend developers.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className=" w-[829px] h-[540px]">
//               <div className=" w-[318px] top-[38px] text-[32px]">
//                 Mar 22' - Present
//               </div>

//               <div className="inline-flex flex-col items-start  gap-[16px] top-0 left-[406px]">
//                 <div className="inline-flex flex-col items-start gap-[8px] flex-[0 0 auto]">
//                   <div className=" w-fit font-largescreen-subheading font-black text-[32px] text-left">
//                     Mecho Autotech Ltd (YC21)
//                   </div>
//                   <div className=" w-fit font-largescreen-subheading font-black text-[24px]">
//                     Product Designer
//                   </div>
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Interaction Design" />
//                   <UtilityLabel text="User Research" />
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Perfomance Metrics" />
//                   <UtilityLabel text="Mixpanel" />
//                 </div>

//                 <ul className=" text-left list-disc w-[421px]">
//                   At Mecho
//                   <li>
//                     I lead the product design teaem where I ensure efficient and
//                     effective work and communucation within the design team as
//                     well as with external teams.
//                   </li>
//                   <li>
//                     I monitor and review UX metrics to identify bottlenecks
//                     onproduct features which is then used to drive design,
//                     business and product decisions.
//                   </li>
//                   <li>
//                     I led the efforts to build the foundation of a scalable
//                     design system for internal and external tools.
//                   </li>
//                   <li>
//                     I carry out user research and usablity tests to collect data
//                     used as reference for product upgrades and feature build.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className=" w-[829px] h-[252px]">
//               <div className=" w-[318px] top-[38px] text-[32px]">
//                 Oct 21' - Feb 22'
//               </div>

//               <div className="inline-flex flex-col items-start gap-[16px] top-0 left-[406px]">
//                 <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
//                   <div className="relative w-fit font-largescreen-subheading font-black text-[32px]">
//                     Casa
//                   </div>
//                   <div className=" w-fit font-largescreen-subheading font-black text-[24px]">
//                     Product Designer
//                   </div>
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Interaction Design" />
//                   <UtilityLabel text="User Research" />
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Figma" />
//                 </div>

//                 <ul className=" text-left w-[421px]">
//                   <li>
//                     I worked with the founders to design and develop the
//                     startup's Edtech mobile application with scalable design
//                     systems and libraries.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className=" w-[829px] h-[252px]">
//               <div className=" w-[318px] top-[38px] text-[32px]">
//                 Nov 21' - Jan 22'
//               </div>

//               <div className="inline-flex flex-col items-start gap-[16px] top-0 left-[406px]">
//                 <div className="inline-flex flex-col items-start relative gap-[8px] flex-[0 0 auto]">
//                   <div className="relative w-fit font-largescreen-subheading font-black text-[32px]">
//                     Ocity
//                   </div>
//                   <div className="w-fit font-largescreen-subheading font-black text-[24px]">
//                     UI/UX Designer
//                   </div>
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Interaction Design" />
//                   <UtilityLabel text="User Research" />
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Figma" />
//                 </div>

//                 <ul className=" text-left relative w-[421px]">
//                   <li>
//                     I worked with the founders to design and develop the
//                     startup's Edtech mobile application with scalable design
//                     systems and libraries.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className=" w-[829px] h-[264px]">
//               <div className=" w-[318px] top-[38px] text-[32px]">
//                 Oct 20' - Jan 22'
//               </div>

//               <div className="inline-flex flex-col items-start  gap-[16px] top-0 left-[406px]">
//                 <div className="inline-flex flex-col items-start gap-[8px] flex-[0 0 auto]">
//                   <div className="relative w-fit font-largescreen-subheading font-black text-[32px] text-left">
//                     Africa Content Market <br />
//                     Limited (ACOMART)
//                   </div>
//                   <div className="relative w-fit font-largescreen-subheading text-[24px] font-black">
//                     Product Designer
//                   </div>
//                 </div>
//                 <div className="inline-flex gap-[16px] relative items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Interaction Design" />
//                   <UtilityLabel text="Figma" />
//                 </div>

//                 <ul className=" text-left relative w-[421px]">
//                   <li>
//                     I worked with the product and engineering team to design and
//                     develop streaming services and features that helped the
//                     company push to mark and attract it's first users.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className=" w-[829px] h-[252px]">
//               <div className=" w-[318px] top-[38px] text-[32px]">
//                 Jul 20' - May 21'
//               </div>

//               <div className="inline-flex flex-col items-start gap-[16px] top-0 left-[406px]">
//                 <div className="inline-flex flex-col items-start gap-[8px] flex-[0 0 auto]">
//                   <div className=" w-fit font-largescreen-subheading font-black text-[32px]">
//                     Doctoora
//                   </div>
//                   <div className=" w-fit font-largescreen-subheading text-[24px] font-black">
//                     Product Graphic Designer
//                   </div>
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Interaction Design" />
//                   <UtilityLabel text="Adobe XD" />
//                 </div>
//                 <div className="inline-flex gap-[16px] items-start flex-[0 0 auto]">
//                   <UtilityLabel text="Figma" />
//                   <UtilityLabel text="Photoshop" />
//                   <UtilityLabel text="Illustrator" />
//                 </div>

//                 <ul className=" text-left relative w-[421px]">
//                   <li>
//                     I designed telemedicine products and features at MVP stages
//                     that helped the company attract it's first users and achieve
//                     product market fit.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             {/* </div> */}
//           </div>
//         </div>
//         <div className="w-[472px] h-[160px] top-[13px] left-[72px] ">
//           <div className=" top-0 left-0 text-[80px] font-black text-left font-largescreen-largedisplay text-greyscale-100">
//             WORK <br /> EXPERIENCE
//           </div>
//         </div>

//         <div className=" left-[72px] top-[277px] text-greyscale-95 rounded-[4px] flex w-fit justify-center items-center px-[24px] py-[16px] bg-base-colorsprimary-blue hover:bg-base-colorssecondary-blue cursor-pointer">
//           <button>Download my resume</button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Experience;
