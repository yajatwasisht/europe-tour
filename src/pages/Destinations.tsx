// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';

const Destinations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedPopularity, setSelectedPopularity] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);
  const [showPopularityDropdown, setShowPopularityDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showMap, setShowMap] = useState(false);

  const countries = [
    'France', 'Italy', 'Spain', 'Germany', 'Greece', 'Netherlands',
    'Switzerland', 'Austria', 'Portugal', 'Belgium'
  ];

  const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

  const popularityCategories = ['Most Popular', 'Trending', 'Hidden Gems'];

  const destinationCategories = [
    'All', 'Cities', 'Beaches', 'Mountains', 'Historical',
    'Cultural', 'Nature', 'Adventure'
  ];

  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      rating: 4.8,
      price: '€599',
      description: 'Experience the city of love with its iconic landmarks and charming streets.',
      category: 'Cities',
      popularity: 'Most Popular',
      bestSeason: 'Spring'
    },
    {
      id: 2,
      name: 'Rome, Italy',
      country: 'Italy',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      rating: 4.7,
      price: '€549',
      description: 'Discover the eternal city with its rich history and delicious cuisine.',
      category: 'Historical',
      popularity: 'Most Popular',
      bestSeason: 'Spring'
    },
    {
      id: 3,
      name: 'Barcelona, Spain',
      country: 'Spain',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      rating: 4.6,
      price: '€499',
      description: 'Enjoy the vibrant culture and stunning architecture of this coastal city.',
      category: 'Cities',
      popularity: 'Trending',
      bestSeason: 'Summer'
    },
    {
      id: 4,
      name: 'Santorini, Greece',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      rating: 4.9,
      price: '€699',
      description: 'Experience the magic of white-washed buildings and stunning sunsets.',
      category: 'Beaches',
      popularity: 'Most Popular',
      bestSeason: 'Summer'
    },
    {
      id: 5,
      name: 'Amsterdam, Netherlands',
      country: 'Netherlands',
      image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      rating: 4.5,
      price: '€449',
      description: 'Explore the charming canals and rich cultural heritage.',
      category: 'Cities',
      popularity: 'Trending',
      bestSeason: 'Spring'
    },
    {
      id: 6,
      name: 'Swiss Alps, Switzerland',
      country: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      rating: 4.7,
      price: '€799',
      description: 'Experience the breathtaking beauty of the Swiss mountains.',
      category: 'Mountains',
      popularity: 'Hidden Gems',
      bestSeason: 'Winter'
    }
  ];

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCountry('');
    setSelectedSeason('');
    setSelectedPopularity('');
    setActiveCategory('all');
  };

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = !selectedCountry || destination.country === selectedCountry;
    const matchesSeason = !selectedSeason || destination.bestSeason === selectedSeason;
    const matchesPopularity = !selectedPopularity || destination.popularity === selectedPopularity;
    const matchesCategory = activeCategory === 'all' || destination.category === activeCategory;
    
    return matchesSearch && matchesCountry && matchesSeason && matchesPopularity && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&h=600&q=80"
            alt="European Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Europe</h1>
            <p className="text-xl mb-8">Explore our handpicked selection of Europe's most breathtaking destinations.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-button text-lg font-medium transition duration-300 cursor-pointer whitespace-nowrap">
              View Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 relative top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              />
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* Country Filter */}
            <div className="relative w-full md:w-1/5">
              <button
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black cursor-pointer whitespace-nowrap"
                onClick={() => {
                  setShowCountryDropdown(!showCountryDropdown);
                  setShowSeasonDropdown(false);
                  setShowPopularityDropdown(false);
                }}
              >
                <span>{selectedCountry || 'Country'}</span>
                <i className="fas fa-chevron-down text-gray-400"></i>
              </button>
              {showCountryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm cursor-pointer whitespace-nowrap"
                      onClick={() => {
                        setSelectedCountry('');
                        setShowCountryDropdown(false);
                      }}
                    >
                      All Countries
                    </button>
                    {countries.map(country => (
                      <button
                        key={country}
                        className={`w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm cursor-pointer whitespace-nowrap ${selectedCountry === country ? 'bg-blue-50 text-blue-600' : ''}`}
                        onClick={() => {
                          setSelectedCountry(country);
                          setShowCountryDropdown(false);
                        }}
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Season Filter */}
            <div className="relative w-full md:w-1/5">
              <button
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black cursor-pointer whitespace-nowrap"
                onClick={() => {
                  setShowSeasonDropdown(!showSeasonDropdown);
                  setShowCountryDropdown(false);
                  setShowPopularityDropdown(false);
                }}
              >
                <span>{selectedSeason || 'Season'}</span>
                <i className="fas fa-chevron-down text-gray-400"></i>
              </button>
              {showSeasonDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm cursor-pointer whitespace-nowrap"
                      onClick={() => {
                        setSelectedSeason('');
                        setShowSeasonDropdown(false);
                      }}
                    >
                      All Seasons
                    </button>
                    {seasons.map(season => (
                      <button
                        key={season}
                        className={`w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm cursor-pointer whitespace-nowrap ${selectedSeason === season ? 'bg-blue-50 text-blue-600' : ''}`}
                        onClick={() => {
                          setSelectedSeason(season);
                          setShowSeasonDropdown(false);
                        }}
                      >
                        {season}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Popularity Filter */}
            <div className="relative w-full md:w-1/5">
              <button
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-black cursor-pointer whitespace-nowrap"
                onClick={() => {
                  setShowPopularityDropdown(!showPopularityDropdown);
                  setShowCountryDropdown(false);
                  setShowSeasonDropdown(false);
                }}
              >
                <span>{selectedPopularity || 'Popularity'}</span>
                <i className="fas fa-chevron-down text-gray-400"></i>
              </button>
              {showPopularityDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm cursor-pointer whitespace-nowrap"
                      onClick={() => {
                        setSelectedPopularity('');
                        setShowPopularityDropdown(false);
                      }}
                    >
                      All
                    </button>
                    {popularityCategories.map(category => (
                      <button
                        key={category}
                        className={`w-full text-left px-3 py-2 hover:bg-blue-50 rounded text-sm cursor-pointer whitespace-nowrap ${selectedPopularity === category ? 'bg-blue-50 text-blue-600' : ''}`}
                        onClick={() => {
                          setSelectedPopularity(category);
                          setShowPopularityDropdown(false);
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Clear Filters Button */}
            <button
              className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-button text-sm font-medium cursor-pointer whitespace-nowrap"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Quick Category Filters */}
      <div className="bg-white border-b border-gray-200 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex space-x-2">
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${activeCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {destinationCategories.slice(1).map(category => (
              <button
                key={category}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => {
              setViewMode('grid');
              setShowMap(false);
            }}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <i className="fas fa-th-large mr-2"></i>
            Grid
          </button>
          <button
            onClick={() => {
              setViewMode('map');
              setShowMap(true);
            }}
            className={`px-4 py-2 rounded-lg ${
              viewMode === 'map' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <i className="fas fa-map-marker-alt mr-2"></i>
            Map
          </button>
        </div>
      </div>

      {/* Map View */}
      {showMap && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Interactive Tour Map
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore the route of our Grand European Adventure tour with our
                interactive map. Click on destinations to learn more about each
                location.
              </p>
            </div>
            <div
              className="relative rounded-lg overflow-hidden shadow-lg h-[500px]"
              style={{
                backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              {/* Paris Marker */}
              <div className="absolute top-[35%] left-[30%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Paris, France</h4>
                  <p className="text-xs text-gray-600 mb-2">Days 1-3: City of Light</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
              {/* Switzerland Marker */}
              <div className="absolute top-[40%] left-[40%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Switzerland</h4>
                  <p className="text-xs text-gray-600 mb-2">Days 4-6: Alpine Beauty</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
              {/* Venice Marker */}
              <div className="absolute top-[50%] left-[45%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Venice, Italy</h4>
                  <p className="text-xs text-gray-600 mb-2">Days 7-8: Floating City</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
              {/* Florence Marker */}
              <div className="absolute top-[55%] left-[42%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Florence, Italy</h4>
                  <p className="text-xs text-gray-600 mb-2">Days 9-10: Renaissance Art</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
              {/* Vienna Marker */}
              <div className="absolute top-[40%] left-[50%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Vienna, Austria</h4>
                  <p className="text-xs text-gray-600 mb-2">Day 11: Imperial City</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
              {/* Berlin Marker */}
              <div className="absolute top-[30%] left-[45%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Berlin, Germany</h4>
                  <p className="text-xs text-gray-600 mb-2">Day 12: Historic Capital</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
              {/* Amsterdam Marker */}
              <div className="absolute top-[25%] left-[35%] group">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg z-10">
                  <h4 className="font-medium text-gray-900 mb-1">Amsterdam, Netherlands</h4>
                  <p className="text-xs text-gray-600 mb-2">Days 13-14: Canal City</p>
                  <a href="#" className="text-xs text-blue-600 hover:underline">View details</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid View */}
      {!showMap && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-blue-600">
                    <i className="fas fa-star text-yellow-400 mr-1"></i> {destination.rating}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                    <span className="text-blue-600 font-bold">{destination.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {destination.category}
                    </span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                      {destination.bestSeason}
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-button font-medium transition duration-300 cursor-pointer whitespace-nowrap">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;