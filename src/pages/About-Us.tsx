// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Zenith</h1>
            <p className="text-xl md:text-2xl max-w-2xl">
              Your trusted partner in creating unforgettable European travel experiences
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Zenith, we are dedicated to providing exceptional travel experiences that combine luxury, adventure, and cultural immersion. Our mission is to make European travel accessible, enjoyable, and memorable for every traveler.
              </p>
              <p className="text-gray-600">
                We believe that travel is not just about visiting new places, but about creating lasting memories and meaningful connections with different cultures and people.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We envision a world where travel is seamless, sustainable, and enriching. Our goal is to be the leading provider of European travel experiences, known for our attention to detail, personalized service, and commitment to excellence.
              </p>
              <p className="text-gray-600">
                Through our carefully curated tours and dedicated service, we aim to inspire and enable travelers to explore Europe's rich heritage and diverse cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Zenith</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marked-alt text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Local Knowledge</h3>
              <p className="text-gray-600">
                Our team of experienced guides and local experts ensure authentic and immersive experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Service</h3>
              <p className="text-gray-600">
                We maintain the highest standards of service quality and customer satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Experience</h3>
              <p className="text-gray-600">
                We tailor our tours to meet your specific interests and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white text-lg mb-8">
            Contact us today to plan your perfect European adventure
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
