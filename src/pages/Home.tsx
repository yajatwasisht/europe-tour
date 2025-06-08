// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home: React.FC = () => {
const [searchDestination, setSearchDestination] = useState('');
const [travelDates, setTravelDates] = useState('');
const [travelers, setTravelers] = useState(1);
const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
const [activeTab, setActiveTab] = useState('all');
const handleTravelersChange = (value: number) => {
if (value >= 1) {
setTravelers(value);
}
};
return (
<div className="min-h-screen bg-gray-50 overflow-x-hidden">
{/* Hero Section */}
<section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=Stunning%20panoramic%20view%20of%20Paris%20with%20Eiffel%20Tower%20at%20sunset%2C%20beautiful%20European%20cityscape%20with%20historic%20architecture%2C%20warm%20golden%20light%20illuminat')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50">
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Discover Europe</h1>
        <p className="text-xl mb-8">Experience the magic of Europe with our curated tours and travel experiences.</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Book Now
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Search Section */}
<section className="container mx-auto px-4 -mt-16 relative z-20">
<div className="bg-white rounded-lg shadow-xl p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="relative">
<label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
<div className="relative">
<input
type="text"
placeholder="Where do you want to go?"
className="w-full pl-10 pr-4 py-3 border border-black bg-white rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder:text-black text-black"
value={searchDestination}
onChange={(e) => setSearchDestination(e.target.value)}
/>
<i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
<div className="relative">
<input
type="text"
placeholder="Select dates"
className="w-full pl-10 pr-4 py-3 border border-black bg-white rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder:text-black text-black"
value={travelDates}
onChange={(e) => setTravelDates(e.target.value)}
/>
<i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
<div className="relative">
<button
className="w-full flex items-center justify-between pl-10 pr-4 py-3 border border-black bg-white rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer whitespace-nowrap text-black"
onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
>
<span>{travelers} {travelers === 1 ? 'Traveler' : 'Travelers'}</span>
<i className="fas fa-chevron-down text-gray-400"></i>
</button>
<i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
{showTravelersDropdown && (
<div className="absolute top-full left-0 right-0 mt-1 bg-white border border-black rounded-full shadow-lg z-50 p-4">
<div className="flex items-center justify-between">
<span className="text-black">Travelers</span>
<div className="flex items-center">
<button
onClick={() => handleTravelersChange(travelers - 1)}
className="w-8 h-8 flex items-center justify-center border border-black bg-black rounded-full text-white hover:bg-gray-800 cursor-pointer whitespace-nowrap"
>
<span className="text-white">-</span>
</button>
<span className="mx-3 text-black">{travelers}</span>
<button
onClick={() => handleTravelersChange(travelers + 1)}
className="w-8 h-8 flex items-center justify-center border border-black bg-black rounded-full text-white hover:bg-gray-800 cursor-pointer whitespace-nowrap"
>
<span className="text-white">+</span>
</button>
</div>
</div>
</div>
)}
</div>
</div>
</div>
<div className="mt-6 flex justify-center">
<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300 flex items-center cursor-pointer whitespace-nowrap">
<i className="fas fa-search mr-2"></i> Search Tours
</button>
</div>
</div>
</section>
{/* Featured Destinations */}
<section className="container mx-auto px-4 py-16">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Explore our handpicked selection of Europe's most breathtaking destinations, each offering unique experiences and unforgettable memories.</p>
</div>
<Swiper
modules={[Pagination, Autoplay, Navigation]}
spaceBetween={20}
slidesPerView={1}
breakpoints={{
640: { slidesPerView: 2 },
768: { slidesPerView: 3 },
1024: { slidesPerView: 4 },
}}
pagination={{ clickable: true }}
navigation
autoplay={{ delay: 5000 }}
className="destination-swiper"
>
<SwiperSlide>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Beautiful%20view%20of%20Paris%20with%20Eiffel%20Tower%2C%20stunning%20European%20architecture%2C%20elegant%20streets%2C%20golden%20hour%20lighting%2C%20professional%20travel%20photography%20with%20dramatic%20sky%2C%20vibrant%20colors%2C%20and%20perfect%20composition&width=400&height=256&seq=2&orientation=landscape"
alt="Paris"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-blue-600">
<i className="fas fa-star text-yellow-400 mr-1"></i> 4.8
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-bold text-gray-800">Paris, France</h3>
<span className="text-blue-600 font-bold">€599</span>
</div>
<p className="text-gray-600 mb-4">Experience the city of love with its iconic landmarks and charming streets.</p>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Quick View
</button>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Breathtaking%20view%20of%20Venice%20canals%20with%20gondolas%2C%20historic%20Italian%20architecture%2C%20beautiful%20bridges%2C%20reflections%20in%20water%2C%20romantic%20atmosphere%2C%20golden%20hour%20lighting%2C%20professional%20travel%20photography%20with%20vibrant%20colors%20and%20perfect%20composition&width=400&height=256&seq=3&orientation=landscape"
alt="Venice"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-blue-600">
<i className="fas fa-star text-yellow-400 mr-1"></i> 4.7
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-bold text-gray-800">Venice, Italy</h3>
<span className="text-blue-600 font-bold">€649</span>
</div>
<p className="text-gray-600 mb-4">Explore the romantic canals and historic architecture of this unique city.</p>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Quick View
</button>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Stunning%20view%20of%20Barcelona%20with%20Sagrada%20Familia%2C%20colorful%20Gaudi%20architecture%2C%20beautiful%20Mediterranean%20coastline%2C%20palm%20trees%2C%20vibrant%20city%20atmosphere%2C%20golden%20hour%20lighting%2C%20professional%20travel%20photography%20with%20dramatic%20sky%20and%20perfect%20composition&width=400&height=256&seq=4&orientation=landscape"
alt="Barcelona"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-blue-600">
<i className="fas fa-star text-yellow-400 mr-1"></i> 4.9
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-bold text-gray-800">Barcelona, Spain</h3>
<span className="text-blue-600 font-bold">€579</span>
</div>
<p className="text-gray-600 mb-4">Discover the vibrant culture, stunning architecture, and beautiful beaches.</p>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Quick View
</button>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Majestic%20view%20of%20Santorini%20with%20white%20buildings%20and%20blue%20domes%2C%20crystal%20clear%20Aegean%20Sea%2C%20stunning%20cliffs%2C%20beautiful%20sunset%2C%20romantic%20atmosphere%2C%20golden%20hour%20lighting%2C%20professional%20travel%20photography%20with%20vibrant%20colors%20and%20perfect%20composition&width=400&height=256&seq=5&orientation=landscape"
alt="Santorini"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-blue-600">
<i className="fas fa-star text-yellow-400 mr-1"></i> 4.9
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-bold text-gray-800">Santorini, Greece</h3>
<span className="text-blue-600 font-bold">€749</span>
</div>
<p className="text-gray-600 mb-4">Experience the breathtaking views, blue domes, and magical sunsets.</p>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Quick View
</button>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-64 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Stunning%20view%20of%20Prague%20Castle%20and%20Charles%20Bridge%2C%20historic%20European%20architecture%2C%20beautiful%20Vltava%20river%2C%20atmospheric%20lighting%2C%20cobblestone%20streets%2C%20professional%20travel%20photography%20with%20dramatic%20sky%2C%20vibrant%20colors%2C%20and%20perfect%20composition&width=400&height=256&seq=6&orientation=landscape"
alt="Prague"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-blue-600">
<i className="fas fa-star text-yellow-400 mr-1"></i> 4.7
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-3">
<h3 className="text-xl font-bold text-gray-800">Prague, Czech Republic</h3>
<span className="text-blue-600 font-bold">€499</span>
</div>
<p className="text-gray-600 mb-4">Explore the fairy-tale architecture and rich history of this charming city.</p>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Quick View
</button>
</div>
</div>
</SwiperSlide>
</Swiper>
</section>
{/* Tour Packages */}
<section className="bg-gray-100 py-16">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Tour Packages</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Choose from our carefully crafted tour packages designed to give you the ultimate European experience.</p>
</div>
<div className="mb-8 flex flex-wrap justify-center gap-4">
<button
className={`px-6 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
onClick={() => setActiveTab('all')}
>
All Tours
</button>
<button
className={`px-6 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap ${activeTab === 'romantic' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
onClick={() => setActiveTab('romantic')}
>
Romantic Getaways
</button>
<button
className={`px-6 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap ${activeTab === 'adventure' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
onClick={() => setActiveTab('adventure')}
>
Adventure Tours
</button>
<button
className={`px-6 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap ${activeTab === 'cultural' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
onClick={() => setActiveTab('cultural')}
>
Cultural Experiences
</button>
<button
className={`px-6 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap ${activeTab === 'luxury' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
onClick={() => setActiveTab('luxury')}
>
Luxury Tours
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Panoramic%20view%20of%20multiple%20European%20landmarks%20including%20Eiffel%20Tower%2C%20Colosseum%2C%20and%20Big%20Ben%2C%20beautiful%20European%20cityscape%20montage%2C%20professional%20travel%20photography%20with%20dramatic%20lighting%2C%20vibrant%20colors%2C%20and%20perfect%20composition&width=400&height=224&seq=7&orientation=landscape"
alt="European Highlights Tour"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
10 Days
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-gray-800 mb-3">European Highlights Tour</h3>
<div className="mb-4">
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Visit 5 countries in 10 days</span>
</div>
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">4-star accommodations included</span>
</div>
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Guided tours at all major attractions</span>
</div>
<div className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Breakfast and dinner included</span>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div>
<span className="text-gray-500 text-sm">From</span>
<p className="text-blue-600 font-bold text-2xl">€1,899</p>
<span className="text-gray-500 text-sm">per person</span>
</div>
<div className="flex items-center">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star-half-alt text-yellow-400"></i>
<span className="ml-1 text-gray-600 text-sm">(128)</span>
</div>
</div>
<div className="flex space-x-3">
<button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Book Now
</button>
<button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Learn More
</button>
</div>
</div>
</div>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Romantic%20view%20of%20Italian%20countryside%20with%20vineyards%2C%20Tuscan%20hills%2C%20cypress%20trees%2C%20beautiful%20villas%2C%20golden%20sunset%20light%2C%20atmospheric%20clouds%2C%20professional%20travel%20photography%20with%20vibrant%20colors%20and%20perfect%20composition&width=400&height=224&seq=8&orientation=landscape"
alt="Italian Romance Tour"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
7 Days
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-gray-800 mb-3">Italian Romance Tour</h3>
<div className="mb-4">
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Venice, Florence, and Rome</span>
</div>
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Boutique hotel accommodations</span>
</div>
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Wine tasting experiences</span>
</div>
<div className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Private gondola ride in Venice</span>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div>
<span className="text-gray-500 text-sm">From</span>
<p className="text-blue-600 font-bold text-2xl">€1,599</p>
<span className="text-gray-500 text-sm">per person</span>
</div>
<div className="flex items-center">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<span className="ml-1 text-gray-600 text-sm">(96)</span>
</div>
</div>
<div className="flex space-x-3">
<button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Book Now
</button>
<button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Learn More
</button>
</div>
</div>
</div>
<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
<div className="relative h-56 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=Stunning%20view%20of%20Swiss%20Alps%20with%20snow-capped%20mountains%2C%20beautiful%20alpine%20lakes%2C%20green%20meadows%2C%20charming%20villages%2C%20dramatic%20clouds%2C%20professional%20travel%20photography%20with%20vibrant%20colors%20and%20perfect%20composition&width=400&height=224&seq=9&orientation=landscape"
alt="Alpine Adventure Tour"
className="w-full h-full object-cover object-top"
/>
<div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
8 Days
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-gray-800 mb-3">Alpine Adventure Tour</h3>
<div className="mb-4">
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Switzerland, Austria, and Bavaria</span>
</div>
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Scenic train journeys included</span>
</div>
<div className="flex items-center mb-2">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Hiking and outdoor activities</span>
</div>
<div className="flex items-center">
<i className="fas fa-check-circle text-green-500 mr-2"></i>
<span className="text-gray-600">Mountain chalet experience</span>
</div>
</div>
<div className="flex justify-between items-center mb-4">
<div>
<span className="text-gray-500 text-sm">From</span>
<p className="text-blue-600 font-bold text-2xl">€1,799</p>
<span className="text-gray-500 text-sm">per person</span>
</div>
<div className="flex items-center">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star-half-alt text-yellow-400"></i>
<span className="ml-1 text-gray-600 text-sm">(84)</span>
</div>
</div>
<div className="flex space-x-3">
<button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Book Now
</button>
<button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Learn More
</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-button text-lg font-medium transition duration-300 cursor-pointer whitespace-nowrap">
View All Tour Packages <i className="fas fa-arrow-right ml-2"></i>
</button>
</div>
</div>
</section>
{/* Why Choose Us */}
<section className="container mx-auto px-4 py-16">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose EuroVoyage</h2>
<p className="text-gray-600 max-w-2xl mx-auto">We're dedicated to providing you with the best European travel experience possible.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-map-marked-alt text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Expert Local Guides</h3>
<p className="text-gray-600">Our guides are local experts who provide authentic insights and insider knowledge of each destination.</p>
</div>
<div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-hotel text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Handpicked Accommodations</h3>
<p className="text-gray-600">We carefully select each hotel to ensure comfort, quality, and authentic local experience.</p>
</div>
<div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-route text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">Thoughtful Itineraries</h3>
<p className="text-gray-600">Our itineraries balance must-see attractions with hidden gems and free time for personal exploration.</p>
</div>
<div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="fas fa-headset text-blue-600 text-2xl"></i>
</div>
<h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Support</h3>
<p className="text-gray-600">Our dedicated support team is available around the clock to assist with any questions or concerns.</p>
</div>
</div>
</section>
{/* Call to Action */}
<section className="relative py-20 overflow-hidden">
<div className="absolute inset-0">
<img
src="https://readdy.ai/api/search-image?query=Stunning%20panoramic%20view%20of%20European%20countryside%20with%20rolling%20hills%2C%20charming%20villages%2C%20beautiful%20sunset%2C%20dramatic%20clouds%2C%20atmospheric%20lighting%2C%20professional%20travel%20photography%20with%20vibrant%20colors%20and%20perfect%20composition&width=1440&height=400&seq=10&orientation=landscape"
alt="European Countryside"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-blue-900/70"></div>
</div>
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-xl mx-auto text-center text-white">
<h2 className="text-3xl font-bold mb-4">Ready to Experience Europe?</h2>
<p className="text-xl mb-8">Book your dream European tour today and create memories that will last a lifetime.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-button text-lg font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Browse Tours
</button>
<button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-button text-lg font-medium transition duration-300 cursor-pointer whitespace-nowrap">
Contact Us
</button>
</div>
</div>
</div>
</section>
{/* Testimonials */}
<section className="container mx-auto px-4 py-16">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Read testimonials from our satisfied customers who have experienced the magic of Europe with us.</p>
</div>
<Swiper
modules={[Pagination, Autoplay]}
spaceBetween={30}
slidesPerView={1}
breakpoints={{
768: { slidesPerView: 2 },
1024: { slidesPerView: 3 },
}}
pagination={{ clickable: true }}
autoplay={{ delay: 5000 }}
className="testimonial-swiper"
>
<SwiperSlide>
<div className="bg-white p-8 rounded-lg shadow-md h-full">
<div className="flex items-center mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<p className="text-gray-600 mb-6 italic">"Our European Highlights tour was absolutely amazing! The guides were knowledgeable, the accommodations were comfortable, and the itinerary was perfectly balanced. We saw so much in 10 days without feeling rushed."</p>
<div className="flex items-center">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
<i className="fas fa-user text-blue-600"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Sarah Johnson</h4>
<p className="text-gray-500 text-sm">London, UK</p>
</div>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white p-8 rounded-lg shadow-md h-full">
<div className="flex items-center mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<p className="text-gray-600 mb-6 italic">"The Italian Romance tour exceeded all our expectations! From the gondola ride in Venice to the wine tasting in Tuscany, every moment was magical. This was the perfect honeymoon experience."</p>
<div className="flex items-center">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
<i className="fas fa-user text-blue-600"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Michael & Emily Davis</h4>
<p className="text-gray-500 text-sm">Toronto, Canada</p>
</div>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white p-8 rounded-lg shadow-md h-full">
<div className="flex items-center mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star-half-alt text-yellow-400"></i>
</div>
<p className="text-gray-600 mb-6 italic">"The Alpine Adventure tour was breathtaking! The scenic train journeys through the Swiss Alps were unforgettable, and the hiking experiences were well-suited for our family. Our guide was exceptional and made the trip special."</p>
<div className="flex items-center">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
<i className="fas fa-user text-blue-600"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Robert Wilson</h4>
<p className="text-gray-500 text-sm">Sydney, Australia</p>
</div>
</div>
</div>
</SwiperSlide>
<SwiperSlide>
<div className="bg-white p-8 rounded-lg shadow-md h-full">
<div className="flex items-center mb-4">
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
<i className="fas fa-star text-yellow-400"></i>
</div>
<p className="text-gray-600 mb-6 italic">"As a solo traveler, I was worried about feeling out of place, but the Mediterranean Cruise tour was perfect! I made great friends, and the small group size made it feel intimate and personal. The destinations were incredible!"</p>
<div className="flex items-center">
<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
<i className="fas fa-user text-blue-600"></i>
</div>
<div>
<h4 className="font-bold text-gray-800">Jennifer Martinez</h4>
<p className="text-gray-500 text-sm">Chicago, USA</p>
</div>
</div>
</div>
</SwiperSlide>
</Swiper>
</section>
{/* Trip Description */}
<section className="py-12 bg-gray-50">
<div className="container mx-auto px-4">
<div className="bg-white rounded-lg shadow-md overflow-hidden">
<div className="p-6 border-b border-gray-200">
<h2 className="text-3xl font-bold text-gray-900 mb-2">
Grand European Adventure
</h2>
<p className="text-gray-600">
Experience the best of Europe in this comprehensive 14-day journey
through multiple countries
</p>
</div>
<div className="p-6">
<div className="flex flex-wrap border-b border-gray-200">
<button className="tab-button px-6 py-3 bg-white border border-black font-medium text-gray-700 hover:text-blue-600 tab-active">
Overview
</button>
<button className="tab-button px-6 py-3 bg-white border border-black font-medium text-gray-700 hover:text-blue-600">
Itinerary
</button>
<button className="tab-button px-6 py-3 bg-white border border-black font-medium text-gray-700 hover:text-blue-600">
Inclusions
</button>
<button className="tab-button px-6 py-3 bg-white border border-black font-medium text-gray-700 hover:text-blue-600">
Accommodation
</button>
<button className="tab-button px-6 py-3 bg-white border border-black font-medium text-gray-700 hover:text-blue-600">
Reviews
</button>
</div>
<div className="py-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<div className="mb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-4">
Tour Highlights
</h3>
<p className="text-gray-600 mb-4">
This comprehensive European tour takes you through 6
countries, showcasing the best of Western Europe's
cultural heritage, natural beauty, and culinary delights.
From the romantic streets of Paris to the canals of
Venice, the alpine beauty of Switzerland to the historic
landmarks of Berlin, this journey offers an unforgettable
experience of Europe's diverse landscapes and rich
history.
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
<div className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-blue-600">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">
Guided tour of the Louvre Museum in Paris
</span>
</div>
<div className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-blue-600">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">
Scenic train ride through the Swiss Alps
</span>
</div>
<div className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-blue-600">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">
Gondola ride in Venice's Grand Canal
</span>
</div>
<div className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-blue-600">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">
Wine tasting in Tuscany's countryside
</span>
</div>
<div className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-blue-600">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">
Guided tour of the Berlin Wall and historic sites
</span>
</div>
<div className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-blue-600">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">
Amsterdam canal cruise with dinner
</span>
</div>
</div>
</div>
<div className="mb-8">
<div className="flex justify-between items-center cursor-pointer py-3 border-b border-gray-200">
<h3 className="text-lg font-semibold text-gray-900">
Day 1-3: Paris, France
</h3>
<div className="w-6 h-6 flex items-center justify-center">
<i className="fas fa-chevron-down text-gray-500"></i>
</div>
</div>
<div className="py-4 text-gray-600">
<p className="mb-3">
Begin your European adventure in the romantic city of
Paris. After arriving at Charles de Gaulle Airport,
you'll be transferred to your centrally located hotel
for check-in and a welcome dinner.
</p>
<p className="font-medium mb-2">Day 1: Arrival and Welcome</p>
<ul className="list-disc pl-5 mb-3 text-gray-600">
<li>Airport transfer to your hotel</li>
<li>Welcome dinner at a traditional French restaurant</li>
<li>Evening walking tour of the illuminated Eiffel Tower</li>
</ul>
<p className="font-medium mb-2">Day 2: Paris Highlights</p>
<ul className="list-disc pl-5 mb-3 text-gray-600">
<li>Guided tour of the Louvre Museum</li>
<li>Lunch at a local café near Notre Dame</li>
<li>Afternoon visit to Montmartre and Sacré-Cœur</li>
<li>Evening Seine River dinner cruise</li>
</ul>
<p className="font-medium mb-2">Day 3: Versailles and Free Time</p>
<ul className="list-disc pl-5 mb-3 text-gray-600">
<li>Morning excursion to the Palace of Versailles</li>
<li>Afternoon free for shopping on Champs-Élysées</li>
<li>Optional evening cabaret show</li>
</ul>
</div>
</div>
</div>
<div>
<div className="bg-gray-50 rounded-lg p-6 mb-6">
<h3 className="text-xl font-semibold text-gray-900 mb-4">
Tour Details
</h3>
<div className="space-y-4">
<div>
<p className="text-gray-500 text-sm">Tour Duration</p>
<p className="text-gray-900 font-medium">14 Days / 13 Nights</p>
</div>
<div>
<p className="text-gray-500 text-sm">Group Size</p>
<p className="text-gray-900 font-medium">Max 16 people</p>
</div>
<div>
<p className="text-gray-500 text-sm">Countries Visited</p>
<p className="text-gray-900 font-medium">
France, Switzerland, Italy, Austria, Germany, Netherlands
</p>
</div>
<div>
<p className="text-gray-500 text-sm">Start Location</p>
<p className="text-gray-900 font-medium">Paris, France</p>
</div>
<div>
<p className="text-gray-500 text-sm">End Location</p>
<p className="text-gray-900 font-medium">Amsterdam, Netherlands</p>
</div>
<div>
<p className="text-gray-500 text-sm">Transportation</p>
<p className="text-gray-900 font-medium">Train, Private Coach, Boat</p>
</div>
<div>
<p className="text-gray-500 text-sm">Accommodation</p>
<p className="text-gray-900 font-medium">4-star hotels throughout</p>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-lg p-6 mb-6">
<h3 className="text-xl font-semibold text-gray-900 mb-4">
Price Includes
</h3>
<ul className="space-y-2">
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">13 nights accommodation</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">Daily breakfast, 7 dinners</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">All transportation between destinations</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">Guided tours and activities as listed</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">Experienced tour director & local guides</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">All entrance fees to attractions</span>
</li>
<li className="flex items-start">
<div className="w-5 h-5 mt-0.5 flex items-center justify-center text-green-500">
<i className="fas fa-check"></i>
</div>
<span className="ml-2 text-gray-700">24/7 support during your trip</span>
</li>
</ul>
</div>
<div className="bg-blue-50 rounded-lg p-6">
<div className="flex justify-between items-center mb-4">
<div>
<p className="text-gray-700 text-sm">Price per person</p>
<p className="text-3xl font-bold text-gray-900">€3,499</p>
</div>
<div className="flex">
<div className="w-5 h-5 flex items-center justify-center text-yellow-400">
<i className="fas fa-star"></i>
</div>
<div className="w-5 h-5 flex items-center justify-center text-yellow-400">
<i className="fas fa-star"></i>
</div>
<div className="w-5 h-5 flex items-center justify-center text-yellow-400">
<i className="fas fa-star"></i>
</div>
<div className="w-5 h-5 flex items-center justify-center text-yellow-400">
<i className="fas fa-star"></i>
</div>
<div className="w-5 h-5 flex items-center justify-center text-yellow-400">
<i className="fas fa-star-half-alt"></i>
</div>
</div>
</div>
<button className="w-full bg-white border border-black text-blue-600 py-3 rounded-lg font-medium mb-3 transition">
Book This Tour
</button>
<button className="w-full bg-white border border-black text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
Download Itinerary
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Newsletter */}
<section className="bg-blue-600">
<div className="container mx-auto px-4 py-16">
<div className="text-center text-white">
<h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
<p className="mb-8">Get the latest travel deals and updates</p>
<div className="max-w-md mx-auto">
<div className="flex gap-4">
<input
type="email"
placeholder="Enter your email"
className="flex-1 px-4 py-2 rounded-lg text-gray-900"
/>
<button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100">
Subscribe
</button>
</div>
</div>
</div>
</div>
</section>
{/* Floating Help Button */}

</div>
);
};

export default Home;