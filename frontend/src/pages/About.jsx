import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="About" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs.</p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive
            to improve healthcare services for everyone.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every
            individual.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
  {/* Efficiency Section */}
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
    <b>Efficiency:</b>
    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
  </div>

  {/* Convenience Section */}
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
    <b>Convenience:</b>
    <p>Access to a network of trusted healthcare professionals in your area.</p>
  </div>

  {/* Personalization Section */}
  <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600">
    <b>Personalization:</b>
    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
  </div>
</div>

    </div>
  );
};

export default About;
