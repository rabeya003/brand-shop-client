const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/61HW10x/depositphotos-31387239-stock-photo-businessman-working-on-modern-technology.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            Buy your favorite gadgets here...
          </h1>
          <p className="">
            Discover and shop for the latest and greatest gadgets right here!
            Explore a world of innovation and find your favorite tech treasures.
            From cutting-edge electronics to must-have accessories, your next
            gadget obsession is just a click away.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
