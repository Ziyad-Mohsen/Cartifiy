import React from "react";

const Hero = () => {
  return (
    <div className="relative hero-bg bg-cover bg-center bg-no-repeat min-h-screen flex items-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      {/* Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center container mx-auto">
        <h1 className="text-white text-5xl font-bold mb-4">
          Discover the Latest <span className="text-primary">Trends</span>
        </h1>
        <p className="text-white text-lg lg:max-w-[600px]">
          Find everything you need in one place. Enjoy the best deals and
          high-quality items tailored for you.
        </p>
        <a href="#shopping-section">
          <button className="mt-7 px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-primary hover:text-white transition-all">
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
