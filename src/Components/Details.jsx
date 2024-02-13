import { useLoaderData } from "react-router-dom";

const Details = () => {
  const loadData = useLoaderData();
  const { name, price, brand, details, rating, img } = loadData || {};
  return (
    <div className="flex justify-center my-24">
      <div className="card lg:card-side bg-base-100 w-[600px] shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl text-blue-900">
            {name}
          </h2>
          <p>{details}</p>
          <div>
            <h1 className=" text-2xl">Brand: {brand}</h1>
            <h2>Price: {price}$</h2>
            <p>Rating: {rating}*</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-blue-900 text-white">My Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
