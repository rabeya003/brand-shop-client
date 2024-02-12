import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BrandPortion = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/brand").then((res) => setBrands(res.data));
  }, []);
  return (
    <div>
      <h2 className="text-6xl text-center mb-12 mt-32 text-[#20BBD8] font-rancho font-bold">
        Brands
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {brands.map((brand) => (
          <>
            <Link to={`/brand/:{brand?.brand_name}`}>
              <div className="px-12 h-[300px] ">
                <div className="flex-shrink-0 m-2 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
                  <div className="relative pt-2 px-2 flex items-center justify-center">
                    <img
                      className="relative h-36"
                      src={brand?.brand_image}
                      alt=""
                    />
                  </div>
                  <div className="relative text-blue-800 text-2xl px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1 text-center">
                      {brand?.brand_name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default BrandPortion;
