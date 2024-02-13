import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const details = form.details.value;
    const img = form.img.value;
    const newProduct = { name, brand, price, rating, category, details, img };

    // Send data to the server
    fetch("http://localhost:5000/tech", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product is added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        e.target.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] my-24 p-24 max-w-[1320px] mx-auto">
      {/* header */}
      <div>
        <div className="flex justify-center items-center gap-3">
          {" "}
          <h3 className="text-5xl text-center font-extrabold font-rancho">
            Add Products
          </h3>
        </div>
        <p className="text-center m-6">
          It is a well-established truth that a reader will be distracted from a
          page&rsquo;s layout by its <br></br> readable content. The reason for
          using Lorem Ipsum instead of Content is that the <br></br>former has a
          more or less normal distribution of letters.
        </p>
      </div>
      {/* form */}
      <form onSubmit={handleAdd}>
        <div>
          {" "}
          <div className="md:flex">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Enter Product name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Enter Brand Name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div className="md:flex">
            {/* card-1 */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* card-2 */}
            <div className="form-control w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div className="md:flex">
            {/* card-1 */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Types</span>
              </label>
              <label className="input-group">
                <select
                  name="category"
                  className="w-full p-3 rounded-lg outline-none"
                  id=""
                >
                  <option value="select">Select an option</option>
                  <option value="phone">Phone</option>
                  <option value="Laptop">Laptop</option>
                  <option value="watch">Watch</option>
                  <option value="headphone">Headphone</option>
                </select>
              </label>
            </div>

            {/* card-2 */}
            <div className="form-control w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter Coffee details"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* IMAGE */}
          <div className="form-control w-full md:flex">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="img"
                placeholder="Enter photo-URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        {/* Submit button */}
        <input
          type="submit"
          value="Submit"
          className="mt-4 btn btn-block text-white hover:bg-[#20BBD9] bg-[#20BBD8]"
        />
      </form>
    </div>
  );
};

export default AddProduct;
