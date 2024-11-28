import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        Maa Medico is a comprehensive medical platform designed to prioritize your health and wellness. We offer a wide range of healthcare services to meet your needs, including access to expert doctors specializing in various fields. Our mission is to make quality healthcare easily accessible to everyone, with a commitment to providing compassionate and personalized care.
        </p>
        <p className="text-justify lg:text-start">
        Through Maa Medico, you can conveniently book appointments, ensuring that professional medical assistance is just a few clicks away. Our user-friendly platform is designed to simplify the process of finding the right doctor and receiving the care you deserve. Whether you need routine check-ups, specialized consultations,
         or healthcare guidance, Maa Medico is here to support you every step of the way. Your health is our priority, and we strive to deliver exceptional care that you can trust.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
          Accusantium ab expedita veniam nobis aut, in rerum repellendus!
          Exercitationem libero recusandae corrupti accusantium reiciendis in
          placeat illo maxime ea.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;