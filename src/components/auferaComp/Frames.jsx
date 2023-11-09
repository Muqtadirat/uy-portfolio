import frame from "./images/frames.png"

function Frames() {
  return (
    <div className="Frames">
      <div className="flex pt-[88px] pb-[96px] text-left gap-[32px]">
        <p className="text-greyscale-40 w-[668px] font-bold text-[24px] font-largescreen-caption leading-[24px]">
          Wireframes
        </p>
        <div className="text-wrapper w-[668px] text-[18px] leading-[24px]">
          <p>
            Wireframing the interface structure was done to ease communication
            with stakeholders and serve for proof of concept for A/B testing and
            desirability studies with users.
          </p> <br />
          <p>
            I have shown mid-high fidelity views of some of the screens below.
          </p>
        </div>
          </div>
          <img src={frame} alt="Wireframes" />
    </div>
  );
}

export default Frames;
