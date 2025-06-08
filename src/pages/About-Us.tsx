// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const swiperModules = [Pagination, Autoplay];

  const faqItems = [
    {
      question: "What makes EuroVoyage different from other tour companies?",
      answer: "EuroVoyage stands out through our expert local guides, small group sizes (never more than 16 travelers), authentic cultural experiences, and commitment to sustainable tourism. We focus exclusively on European destinations, allowing us to offer deeper expertise and connections in every location we visit."
    },
    {
      question: "How large are your tour groups?",
      answer: "We believe in quality experiences over quantity. Our groups are intentionally kept small, with a maximum of 12-16 travelers depending on the tour. This ensures personalized attention, easier access to local sites, and more meaningful cultural interactions."
    },
    {
      question: "What's included in the tour price?",
      answer: "Our tour prices typically include accommodations, expert guides, transportation within the tour, entrance fees to scheduled attractions, and select meals as specified in each itinerary. International airfare, travel insurance, optional activities, and some meals are generally not included, allowing you flexibility in your travel arrangements."
    },
    {
      question: "How physically demanding are your tours?",
      answer: "We offer tours with varying activity levels, from leisurely to active. Each tour is clearly marked with an activity level rating and detailed information about walking distances, terrain, and other physical requirements. We're happy to help you find a tour that matches your comfort level."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand plans can change. For most tours, cancellations made 90+ days before departure receive a full refund minus deposit. Cancellations 60-89 days prior receive a 50% refund, and cancellations less than 60 days before departure are non-refundable. We strongly recommend travel insurance to protect your investment."
    }
  ];

  const teamMembers = [
    {
      name: "Elena Rossi",
      position: "Founder & CEO",
      bio: "With over 20 years in European tourism, Elena founded EuroVoyage to share her passion for authentic travel experiences. Her expertise in cultural tourism has shaped our company's vision.",
      expertise: "Cultural Heritage, Sustainable Tourism",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520elegant%2520female%2520CEO%2520in%2520her%252040s%2520with%2520dark%2520hair%2520and%2520confident%2520smile%252C%2520wearing%2520business%2520attire%252C%2520against%2520neutral%2520professional%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520soft%2520lighting%2520and%2520shallow%2520depth%2520of%2520field&width=300&height=300&seq=101&orientation=squarish"
    },
    {
      name: "Marcus Schmidt",
      position: "Head of Tour Operations",
      bio: "Marcus brings 15 years of experience planning and executing flawless European tours. His attention to detail and vast network of local partners ensures exceptional experiences.",
      expertise: "Logistics, Destination Management",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520male%2520tourism%2520executive%2520in%2520his%252030s%2520with%2520short%2520brown%2520hair%2520and%2520friendly%2520expression%252C%2520wearing%2520smart%2520casual%2520attire%252C%2520against%2520neutral%2520professional%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520natural%2520lighting&width=300&height=300&seq=102&orientation=squarish"
    },
    {
      name: "Sophie Laurent",
      position: "Lead Tour Guide",
      bio: "A historian by training and storyteller by nature, Sophie has led tours across Europe for 12 years. Her knowledge of European art, architecture, and history brings each destination to life.",
      expertise: "Art History, Cultural Interpretation",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520tour%2520guide%2520in%2520her%252030s%2520with%2520blonde%2520hair%2520and%2520engaging%2520smile%252C%2520wearing%2520smart%2520casual%2520outdoor%2520attire%252C%2520against%2520neutral%2520professional%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520natural%2520lighting&width=300&height=300&seq=103&orientation=squarish"
    },
    {
      name: "David Thompson",
      position: "Sustainability Director",
      bio: "David leads our initiatives to minimize environmental impact and maximize positive contributions to local communities. His background in environmental management guides our responsible tourism practices.",
      expertise: "Eco-tourism, Community Engagement",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520male%2520sustainability%2520expert%2520in%2520his%252040s%2520with%2520glasses%2520and%2520thoughtful%2520expression%252C%2520wearing%2520casual%2520professional%2520attire%252C%2520against%2520neutral%2520professional%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520natural%2520lighting&width=300&height=300&seq=104&orientation=squarish"
    },
    {
      name: "Isabella Moretti",
      position: "Customer Experience Manager",
      bio: "Isabella ensures every aspect of your journey exceeds expectations. Her hospitality background and passion for service excellence make her an invaluable advocate for our travelers.",
      expertise: "Guest Relations, Quality Assurance",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520female%2520customer%2520service%2520manager%2520in%2520her%252030s%2520with%2520dark%2520hair%2520and%2520warm%2520welcoming%2520smile%252C%2520wearing%2520professional%2520attire%252C%2520against%2520neutral%2520professional%2520background%252C%2520high%2520quality%2520portrait%2520photograph%2520with%2520soft%2520lighting&width=300&height=300&seq=105&orientation=squarish"
    },
    {
      name: "Pierre Dubois",
      position: "Culinary Experiences Director",
      bio: "Former chef turned culinary tour expert, Pierre designs our food and wine experiences. His connections with local producers, chefs, and vintners create unforgettable gastronomic adventures.",
      expertise: "Food & Wine Tours, Culinary Traditions",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520male%2520culinary%2520expert%2520in%2520his%252040s%2520with%2520salt%2520and%2520pepper%2520hair%2520and%2520confident%2520expression%252C%2520wearing%2520chef%2520jacket%2520or%2520professional%2520attire%252C%2520against%2520neutral%2520professional%2520background%252C%2520high%2520quality%2520portrait%2520photograph&width=300&height=300&seq=106&orientation=squarish"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      tour: "Classic European Capitals",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520smiling%2520woman%2520in%2520her%252030s%2520with%2520shoulder%2520length%2520brown%2520hair%252C%2520natural%2520makeup%252C%2520friendly%2520expression%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph&width=80&height=80&seq=107&orientation=squarish",
      comment: "EuroVoyage delivered an experience beyond my expectations. Our guide Elena was incredibly knowledgeable, and the small group size allowed us to access places and have experiences that wouldn't be possible with larger tours. The balance of structured activities and free time was perfect.",
      rating: 5
    },
    {
      name: "Michael Chen",
      tour: "Mediterranean Cruise Adventure",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520smiling%2520Asian%2520man%2520in%2520his%252040s%2520with%2520short%2520black%2520hair%252C%2520glasses%252C%2520friendly%2520expression%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph&width=80&height=80&seq=108&orientation=squarish",
      comment: "The attention to detail on our Mediterranean cruise was impressive. From seamless transfers to carefully selected shore excursions with local experts, every aspect was thoughtfully planned. The sustainability efforts were also apparent and appreciated.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      tour: "Italian Culinary Journey",
      image: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520smiling%2520blonde%2520woman%2520in%2520her%252020s%2520with%2520long%2520hair%252C%2520natural%2520makeup%252C%2520friendly%2520expression%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%2520photograph&width=80&height=80&seq=109&orientation=squarish",
      comment: "As a foodie, this tour was a dream come true. We didn't just eat amazing food—we connected with the people and traditions behind it. Cooking with a family in Tuscany and meeting small-scale cheese producers in Sicily were highlights I'll never forget.",
      rating: 5
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "EuroVoyage was founded in London by Elena Rossi with a vision to create authentic European travel experiences."
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Expanded tour offerings to include 15 countries across Western and Central Europe."
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description: "Launched our comprehensive sustainability program, committing to responsible tourism practices."
    },
    {
      year: "2018",
      title: "Award Recognition",
      description: "Received 'Best European Tour Operator' award from International Travel Association."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Successfully navigated the pandemic by introducing virtual tours and enhanced health protocols."
    },
    {
      year: "2023",
      title: "15th Anniversary",
      description: "Celebrated 15 years with the introduction of exclusive small-group experiences and specialized thematic tours."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&h=600&q=80"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-8">Your trusted partner in creating unforgettable European travel experiences.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-button text-lg font-medium transition duration-300 cursor-pointer whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600">We're dedicated to creating unforgettable European travel experiences that combine cultural immersion, comfort, and adventure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion for Travel</h3>
              <p className="text-gray-600">We're driven by our love for European culture and our desire to share it with the world.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-star text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every aspect of our service, from tour planning to customer support.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">We operate with transparency and honesty, building trust with our customers and partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">Our experienced team of travel experts is dedicated to making your European journey unforgettable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20male%20travel%20expert%20in%20business%20casual%20attire%2C%20standing%20against%20a%20neutral%20background%2C%20professional%20photography%20with%20natural%20lighting%2C%20conveying%20trustworthiness%20and%20expertise%20in%20travel%20planning&width=400&height=400&seq=202&orientation=portrait"
                alt="John Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">John Smith</h3>
              <p className="text-gray-600 text-center">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20female%20travel%20expert%20in%20business%20casual%20attire%2C%20standing%20against%20a%20neutral%20background%2C%20professional%20photography%20with%20natural%20lighting%2C%20conveying%20trustworthiness%20and%20expertise%20in%20travel%20planning&width=400&height=400&seq=203&orientation=portrait"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 text-center">Head of Operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20male%20travel%20expert%20in%20business%20casual%20attire%2C%20standing%20against%20a%20neutral%20background%2C%20professional%20photography%20with%20natural%20lighting%2C%20conveying%20trustworthiness%20and%20expertise%20in%20travel%20planning&width=400&height=400&seq=204&orientation=portrait"
                alt="Michael Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Michael Chen</h3>
              <p className="text-gray-600 text-center">Tour Director</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20female%20travel%20expert%20in%20business%20casual%20attire%2C%20standing%20against%20a%20neutral%20background%2C%20professional%20photography%20with%20natural%20lighting%2C%20conveying%20trustworthiness%20and%20expertise%20in%20travel%20planning&width=400&height=400&seq=205&orientation=portrait"
                alt="Emma Wilson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Emma Wilson</h3>
              <p className="text-gray-600 text-center">Customer Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600">Don't just take our word for it - hear from our satisfied customers.</p>
          </div>

          <Swiper
            modules={swiperModules}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper"
          >
            <SwiperSlide>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-quote-left text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Robert & Maria</h4>
                    <p className="text-gray-600">Italy Tour</p>
                  </div>
                </div>
                <p className="text-gray-600">"An incredible experience from start to finish. The attention to detail and local expertise made our Italian adventure truly special."</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-quote-left text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">The Thompson Family</h4>
                    <p className="text-gray-600">France Tour</p>
                  </div>
                </div>
                <p className="text-gray-600">"Perfect for families! Our kids loved the interactive activities and we appreciated the well-planned itinerary."</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-quote-left text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">David & Lisa</h4>
                    <p className="text-gray-600">Spain Tour</p>
                  </div>
                </div>
                <p className="text-gray-600">"The local guides were amazing, and the accommodations were perfect. We'll definitely book with EuroVoyage again!"</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
