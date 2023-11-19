import createOrg from "./mechoE images/Create Organization.png";
import analytics from "./mechoE images/Analytics.png";
import repairReq from "./mechoE images/Repair Requests.png";
import createReq from "./mechoE images/Create request-Product.png";
import prod1 from "./mechoE images/Product1.png";
import prod2 from "./mechoE images/Product2.png";
import vehicleProf from "./mechoE images/Vehicle profile-Product1.png";
import vehicleProf2 from "./mechoE images/Vehicle profile-Product2.png";
import creditAccess from "./mechoE images/Credit access-Product.png";

function ProductImg({ imgSrc, height }) {
  const imgStyle = {
    width: "668px",
    height: `${height}`,
  };

  return (
    <div>
      <img src={imgSrc} alt="Wireframe" style={imgStyle} />
    </div>
  );
}

function Product() {
  return (
    <div className="Product mx-[72px] mt-24">
      <h2 className="text-left text-5xl font-medium font-largescreen-largedisplay">
        Product
      </h2>
      <p className="mt-16 text-left text-greyscale-40 text-2xl font-bold leading-6">
        Final Product
      </p>

      {/* Images */}

      <div className="images flex flex-wrap mt-[88px] gap-6">
        <ProductImg imgSrc={createOrg} height="440px" />
        <ProductImg imgSrc={analytics} height="551px" />
        <ProductImg imgSrc={repairReq} height="712px" />
        <ProductImg imgSrc={createReq} height="458px" />
        <ProductImg imgSrc={prod1} height="601px" />
        <ProductImg imgSrc={prod2} height="846px" />
        <ProductImg imgSrc={vehicleProf} height="407px" />
        <ProductImg imgSrc={vehicleProf2} height="610px" />
        <ProductImg imgSrc={creditAccess} height="769px" />
      </div>
    </div>
  );
}

export default Product;
