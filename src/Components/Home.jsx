import React from "react";
import Button from "../Layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life...
        </h1>
        <p>
        Welcome to Maa Medico, your trusted partner in health and wellness. Our platform is designed to provide comprehensive healthcare solutions tailored to meet your needs. At Maa Medico, you can access expert doctors from various specialties, ensuring quality medical care at your convenience. Learn more about our mission and values in the About Us section, where we share our commitment to making healthcare accessible and reliable.
        </p>
      </div>
    </div>
  );
};

export default Home;