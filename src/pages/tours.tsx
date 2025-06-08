// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const Tours: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const swiperModules = [Pagination, Autoplay];

  // Sample tour data
  const tours = [
    {
      id: 1,
      name: "Classic European Capitals",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20panoramic%20view%20of%20European%20capitals%20including%20Paris%20Eiffel%20Tower%2C%20Rome%20Colosseum%2C%20and%20London%20Big%20Ben%20with%20dramatic%20lighting%2C%20professional%20travel%20photography%20with%20vibrant%20colors%2C%20high%20resolution%20cityscape%20with%20iconic%20landmarks%20against%20clean%20blue%20sky%20background&width=600&height=400&seq=201&orientation=landscape",
      description: "Experience the best of Europe's iconic capital cities. Visit Paris, London, Berlin, and Rome in one unforgettable journey.",
      duration: "10 days",
      price: 2499,
      rating: 4.8,
      reviewCount: 124,
      destinations: ["France", "UK", "Germany", "Italy"],
      included: ["Accommodation", "Breakfast", "City Tours", "Museum Passes"],
      tourType: "Cultural",
      departureDates: ["Jun 15, 2025", "Jul 20, 2025", "Aug 10, 2025"],
      featured: true,
      categories: ["Cultural", "City Tours", "Popular"]
    },
    {
      id: 2,
      name: "Mediterranean Cruise Adventure",
      image: "https://readdy.ai/api/search-image?query=Luxurious%20cruise%20ship%20sailing%20through%20Mediterranean%20Sea%20with%20stunning%20coastal%20views%20of%20Greek%20islands%2C%20Italian%20coastline%2C%20and%20Spanish%20beaches%2C%20professional%20travel%20photography%20with%20vibrant%20blue%20waters%2C%20dramatic%20sunset%20lighting%2C%20high%20resolution%20seascape%20against%20clean%20background&width=600&height=400&seq=202&orientation=landscape",
      description: "Sail the azure waters of the Mediterranean and explore the most beautiful coastal cities and islands of Southern Europe.",
      duration: "14 days",
      price: 3299,
      rating: 4.9,
      reviewCount: 89,
      destinations: ["Italy", "Greece", "Croatia", "Spain"],
      included: ["Luxury Cabin", "All Meals", "Shore Excursions", "Entertainment"],
      tourType: "Cruise",
      departureDates: ["May 22, 2025", "Jun 26, 2025", "Sep 04, 2025"],
      featured: true,
      categories: ["Cruise", "Luxury", "Beach"]
    },
    {
      id: 3,
      name: "Alpine Explorer",
      image: "https://readdy.ai/api/search-image?query=Breathtaking%20panoramic%20view%20of%20Swiss%20Alps%20with%20snow-capped%20mountains%2C%20lush%20green%20valleys%2C%20crystal%20clear%20lakes%2C%20charming%20alpine%20villages%2C%20dramatic%20clouds%2C%20professional%20travel%20photography%20with%20vibrant%20colors%2C%20high%20resolution%20mountain%20landscape%20against%20clean%20blue%20sky%20background&width=600&height=400&seq=203&orientation=landscape",
      description: "Discover the majestic beauty of the Alps across Switzerland, Austria, and Northern Italy with guided hikes and scenic train journeys.",
      duration: "8 days",
      price: 1899,
      rating: 4.7,
      reviewCount: 76,
      destinations: ["Switzerland", "Austria", "Italy"],
      included: ["Mountain Lodges", "Breakfast & Dinner", "Guided Hikes", "Scenic Trains"],
      tourType: "Adventure",
      departureDates: ["Jun 10, 2025", "Jul 15, 2025", "Aug 20, 2025"],
      featured: true,
      categories: ["Adventure", "Nature", "Active"]
    },
    {
      id: 4,
      name: "Iberian Discovery",
      image: "https://readdy.ai/api/search-image?query=Stunning%20panoramic%20view%20of%20Spanish%20and%20Portuguese%20landscapes%20featuring%20Lisbon%20waterfront%2C%20Seville%20flamenco%20dancers%2C%20Barcelona%20architecture%2C%20and%20Madrid%20royal%20palace%2C%20professional%20travel%20photography%20with%20vibrant%20colors%2C%20golden%20hour%20lighting%2C%20high%20resolution%20cityscape%20against%20clean%20background&width=600&height=400&seq=204&orientation=landscape",
      description: "Journey through the Iberian Peninsula exploring the rich cultures, historic cities, and delicious cuisines of Spain and Portugal.",
      duration: "12 days",
      price: 2699,
      rating: 4.6,
      reviewCount: 92,
      destinations: ["Spain", "Portugal"],
      included: ["4-Star Hotels", "Breakfast", "Wine Tastings", "Cultural Shows"],
      tourType: "Cultural",
      departureDates: ["May 05, 2025", "Sep 15, 2025", "Oct 10, 2025"],
      featured: false,
      categories: ["Cultural", "Food & Wine", "City Tours"]
    },
    {
      id: 5,
      name: "Nordic Wonders",
      image: "https://readdy.ai/api/search-image?query=Spectacular%20view%20of%20Scandinavian%20landscapes%20featuring%20Norwegian%20fjords%2C%20Swedish%20forests%2C%20Danish%20coastlines%2C%20and%20Finnish%20lakes%2C%20professional%20travel%20photography%20with%20northern%20lights%2C%20midnight%20sun%2C%20dramatic%20lighting%2C%20high%20resolution%20nature%20scenes%20against%20clean%20background&width=600&height=400&seq=205&orientation=landscape",
      description: "Experience the natural beauty and unique cultures of Scandinavia, from the Norwegian fjords to the design capitals of Copenhagen and Stockholm.",
      duration: "10 days",
      price: 2899,
      rating: 4.8,
      reviewCount: 64,
      destinations: ["Norway", "Sweden", "Denmark", "Finland"],
      included: ["Boutique Hotels", "Breakfast", "Fjord Cruise", "City Tours"],
      tourType: "Scenic",
      departureDates: ["Jun 01, 2025", "Jul 15, 2025", "Aug 05, 2025"],
      featured: false,
      categories: ["Scenic", "Nature", "Cultural"]
    },
    {
      id: 6,
      name: "Greek Island Hopping",
      image: "https://readdy.ai/api/search-image?query=Beautiful%20view%20of%20Greek%20islands%20with%20white%20buildings%20and%20blue%20domes%20of%20Santorini%2C%20beaches%20of%20Mykonos%2C%20ancient%20ruins%20of%20Crete%2C%20crystal%20clear%20Aegean%20Sea%2C%20professional%20travel%20photography%20with%20vibrant%20colors%2C%20golden%20hour%20lighting%2C%20high%20resolution%20seascape%20against%20clean%20background&width=600&height=400&seq=206&orientation=landscape",
      description: "Hop between the most beautiful Greek islands, enjoying crystal-clear waters, ancient ruins, and authentic Greek hospitality.",
      duration: "9 days",
      price: 1999,
      rating: 4.9,
      reviewCount: 118,
      destinations: ["Greece"],
      included: ["Island Hotels", "Breakfast", "Ferry Transfers", "Beach Access"],
      tourType: "Beach",
      departureDates: ["May 20, 2025", "Jun 25, 2025", "Sep 10, 2025"],
      featured: true,
      categories: ["Beach", "Island", "Cultural"]
    },
    {
      id: 7,
      name: "Eastern European Heritage",
      image: "https://readdy.ai/api/search-image?query=Stunning%20view%20of%20Eastern%20European%20cities%20featuring%20Prague%20castle%2C%20Budapest%20parliament%2C%20Krakow%20old%20town%2C%20and%20Vienna%20palaces%2C%20professional%20travel%20photography%20with%20dramatic%20lighting%2C%20architectural%20details%2C%20high%20resolution%20cityscape%20with%20historic%20buildings%20against%20clean%20background&width=600&height=400&seq=207&orientation=landscape",
      description: "Discover the rich history and architectural treasures of Eastern Europe, from Prague to Budapest, Krakow to Vienna.",
      duration: "11 days",
      price: 2199,
      rating: 4.7,
      reviewCount: 83,
      destinations: ["Czech Republic", "Hungary", "Poland", "Austria"],
      included: ["Historic Hotels", "Breakfast", "Guided Tours", "Concert Tickets"],
      tourType: "Cultural",
      departureDates: ["May 10, 2025", "Jul 05, 2025", "Sep 20, 2025"],
      featured: false,
      categories: ["Cultural", "History", "City Tours"]
    },
    {
      id: 8,
      name: "Italian Culinary Journey",
      image: "https://readdy.ai/api/search-image?query=Mouthwatering%20Italian%20cuisine%20scenes%20with%20pasta%20making%20in%20Tuscany%2C%20wine%20tasting%20in%20vineyards%2C%20fresh%20seafood%20in%20Sicily%2C%20pizza%20in%20Naples%2C%20professional%20food%20photography%20with%20vibrant%20colors%2C%20beautiful%20Italian%20landscapes%2C%20high%20resolution%20culinary%20images%20against%20clean%20background&width=600&height=400&seq=208&orientation=landscape",
      description: "Savor the flavors of Italy from north to south, with cooking classes, wine tastings, and meals at the finest local restaurants.",
      duration: "10 days",
      price: 2799,
      rating: 4.9,
      reviewCount: 97,
      destinations: ["Italy"],
      included: ["Boutique Hotels", "Most Meals", "Cooking Classes", "Wine Tastings"],
      tourType: "Food & Wine",
      departureDates: ["May 15, 2025", "Jun 20, 2025", "Sep 25, 2025"],
      featured: false,
      categories: ["Food & Wine", "Cultural", "Luxury"]
    },
    {
      id: 9,
      name: "Scottish Highlands Explorer",
      image: "https://readdy.ai/api/search-image?query=Dramatic%20landscape%20of%20Scottish%20Highlands%20with%20misty%20mountains%2C%20ancient%20castles%2C%20lush%20green%20valleys%2C%20serene%20lochs%2C%20professional%20travel%20photography%20with%20moody%20lighting%2C%20vibrant%20colors%2C%20high%20resolution%20nature%20scenes%20with%20historic%20landmarks%20against%20clean%20background&width=600&height=400&seq=209&orientation=landscape",
      description: "Journey through the wild beauty of the Scottish Highlands, exploring historic castles, misty mountains, and legendary lochs.",
      duration: "7 days",
      price: 1699,
      rating: 4.8,
      reviewCount: 72,
      destinations: ["United Kingdom"],
      included: ["Country Inns", "Breakfast & Dinner", "Whisky Tastings", "Castle Tours"],
      tourType: "Scenic",
      departureDates: ["May 25, 2025", "Jul 10, 2025", "Sep 05, 2025"],
      featured: false,
      categories: ["Scenic", "Nature", "History"]
    },
    {
      id: 10,
      name: "French Riviera Luxury",
      image: "https://readdy.ai/api/search-image?query=Luxurious%20view%20of%20French%20Riviera%20with%20Monaco%20yachts%2C%20Nice%20promenade%2C%20Cannes%20beaches%2C%20Saint-Tropez%20villas%2C%20professional%20travel%20photography%20with%20azure%20Mediterranean%20waters%2C%20glamorous%20settings%2C%20high%20resolution%20coastal%20scenes%20with%20luxury%20lifestyle%20against%20clean%20background&width=600&height=400&seq=210&orientation=landscape",
      description: "Experience the glamour and beauty of the French Riviera, staying in luxury accommodations and visiting exclusive locations.",
      duration: "8 days",
      price: 3499,
      rating: 4.9,
      reviewCount: 56,
      destinations: ["France"],
      included: ["5-Star Hotels", "Breakfast", "Private Transfers", "Yacht Excursion"],
      tourType: "Luxury",
      departureDates: ["Jun 05, 2025", "Jul 25, 2025", "Sep 15, 2025"],
      featured: false,
      categories: ["Luxury", "Beach", "Exclusive"]
    },
    {
      id: 11,
      name: "Balkan Adventure",
      image: "https://readdy.ai/api/search-image?query=Diverse%20landscapes%20of%20Balkan%20countries%20featuring%20Croatian%20coastline%2C%20Montenegrin%20mountains%2C%20Albanian%20villages%2C%20and%20Serbian%20monasteries%2C%20professional%20travel%20photography%20with%20dramatic%20lighting%2C%20vibrant%20colors%2C%20high%20resolution%20scenes%20of%20natural%20beauty%20and%20historic%20sites%20against%20clean%20background&width=600&height=400&seq=211&orientation=landscape",
      description: "Explore the less-traveled but incredibly beautiful Balkan region, with its diverse cultures, dramatic landscapes, and rich history.",
      duration: "13 days",
      price: 2399,
      rating: 4.7,
      reviewCount: 48,
      destinations: ["Croatia", "Montenegro", "Albania", "Serbia"],
      included: ["Local Hotels", "Breakfast", "Adventure Activities", "Cultural Experiences"],
      tourType: "Adventure",
      departureDates: ["May 30, 2025", "Jul 20, 2025", "Sep 10, 2025"],
      featured: false,
      categories: ["Adventure", "Off the Beaten Path", "Cultural"]
    },
    {
      id: 12,
      name: "Christmas Markets Magic",
      image: "https://readdy.ai/api/search-image?query=Enchanting%20European%20Christmas%20markets%20with%20twinkling%20lights%2C%20wooden%20stalls%2C%20snow-covered%20squares%20in%20Germany%2C%20Austria%2C%20and%20France%2C%20professional%20photography%20with%20festive%20atmosphere%2C%20holiday%20decorations%2C%20high%20resolution%20winter%20scenes%20with%20warm%20glowing%20lights%20against%20clean%20background&width=600&height=400&seq=212&orientation=landscape",
      description: "Experience the magic of Europe's best Christmas markets, from Nuremberg to Strasbourg, Vienna to Prague, in all their festive glory.",
      duration: "8 days",
      price: 1999,
      rating: 4.8,
      reviewCount: 86,
      destinations: ["Germany", "Austria", "France", "Czech Republic"],
      included: ["Cozy Hotels", "Breakfast", "Market Tours", "Festive Dinners"],
      tourType: "Seasonal",
      departureDates: ["Nov 28, 2025", "Dec 05, 2025", "Dec 12, 2025"],
      featured: false,
      categories: ["Seasonal", "Cultural", "Winter"]
    }
  ];

  // Filter tours based on search and filters
  const filteredTours = tours.filter(tour => {
    const matchesSearch = searchQuery === '' ||
      tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.destinations.some(dest => dest.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === '' || tour.tourType === selectedType;
    const matchesDuration = selectedDuration === '' ||
      (selectedDuration === '1-3 days' && parseInt(tour.duration) <= 3) ||
      (selectedDuration === '4-7 days' && parseInt(tour.duration) >= 4 && parseInt(tour.duration) <= 7) ||
      (selectedDuration === '8-14 days' && parseInt(tour.duration) >= 8 && parseInt(tour.duration) <= 14) ||
      (selectedDuration === '15+ days' && parseInt(tour.duration) >= 15);
    const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
    const matchesDestination = selectedDestination === '' ||
      tour.destinations.includes(selectedDestination);
    const matchesCategory = activeCategory === 'all' ||
      tour.categories.includes(activeCategory);
    return matchesSearch && matchesType && matchesDuration &&
      matchesPrice && matchesDestination && matchesCategory;
  });

  // Featured tours
  const featuredTours = tours.filter(tour => tour.featured);

  // Unique tour types
  const tourTypes = Array.from(new Set(tours.map(tour => tour.tourType)));

  // Unique tour categories
  const tourCategories = Array.from(
    new Set(tours.flatMap(tour => tour.categories))
  );

  // All destinations from tours
  const allDestinations = Array.from(
    new Set(tours.flatMap(tour => tour.destinations))
  ).sort();

  // Reset filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedType('');
    setSelectedDuration('');
    setPriceRange([500, 5000]);
    setSelectedDestination('');
    setActiveCategory('all');
  };

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      tour: "Classic European Capitals",
      rating: 5,
      date: "May 15, 2025",
      comment: "This tour exceeded all my expectations! Our guide was incredibly knowledgeable and the itinerary was perfectly balanced between guided activities and free time.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20woman%20in%20her%2030s%20with%20shoulder%20length%20brown%20hair%2C%20natural%20makeup%2C%20friendly%20expression%2C%20neutral%20background%2C%20high%20quality%20portrait%20photograph&width=60&height=60&seq=301&orientation=squarish"
    },
    {
      id: 2,
      name: "Michael Chen",
      tour: "Mediterranean Cruise Adventure",
      rating: 5,
      date: "April 28, 2025",
      comment: "The cruise was absolutely amazing! The ship was luxurious, the food was incredible, and each port of call offered unique and memorable experiences.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20Asian%20man%20in%20his%2040s%20with%20short%20black%20hair%2C%20glasses%2C%20friendly%20expression%2C%20neutral%20background%2C%20high%20quality%20portrait%20photograph&width=60&height=60&seq=302&orientation=squarish"
    },
    {
      id: 3,
      name: "Emma Wilson",
      tour: "Greek Island Hopping",
      rating: 4,
      date: "June 2, 2025",
      comment: "Beautiful islands and great organization. The only reason for 4 stars instead of 5 was that one of the hotels wasn't quite up to the standard of the others.",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20smiling%20blonde%20woman%20in%20her%2020s%20with%20long%20hair%2C%20natural%20makeup%2C%20friendly%20expression%2C%20neutral%20background%2C%20high%20quality%20portrait%20photograph&width=60&height=60&seq=303&orientation=squarish"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Stunning%20panoramic%20view%20of%20European%20landmarks%20and%20landscapes%20with%20dramatic%20lighting%2C%20featuring%20ancient%20architecture%2C%20cobblestone%20streets%2C%20and%20cultural%20heritage%20sites%2C%20professional%20travel%20photography%20with%20vibrant%20colors%20and%20perfect%20composition%20showcasing%20the%20beauty%20and%20diversity%20of%20Europe%20against%20blue%20sky&width=1440&height=600&seq=200&orientation=landscape"
            alt="European Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Europe</h1>
            <p className="text-xl mb-8">Explore our curated selection of unforgettable European tours and experiences.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-button text-lg font-medium transition duration-300 cursor-pointer whitespace-nowrap">
              View All Tours
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 relative top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="w-full md:flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-black placeholder:text-black"
              />
            </div>
            <div className="w-full md:w-auto relative">
              <button
                onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                {selectedType || 'Tour Type'}
                <i className="fas fa-chevron-down ml-2 text-black"></i>
              </button>
              {showTypeDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {tourTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedType(type);
                        setShowTypeDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-black"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:w-auto relative">
              <button
                onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                {selectedDuration || 'Duration'}
                <i className="fas fa-chevron-down ml-2 text-black"></i>
              </button>
              {showDurationDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {['1-3 days', '4-7 days', '8-14 days', '15+ days'].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => {
                        setSelectedDuration(duration);
                        setShowDurationDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-black"
                    >
                      {duration}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:w-auto relative">
              <button
                onClick={() => setShowDestinationDropdown(!showDestinationDropdown)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                {selectedDestination || 'Destination'}
                <i className="fas fa-chevron-down ml-2 text-black"></i>
              </button>
              {showDestinationDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {allDestinations.map((destination) => (
                    <button
                      key={destination}
                      onClick={() => {
                        setSelectedDestination(destination);
                        setShowDestinationDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 text-black"
                    >
                      {destination}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleClearFilters}
              className="w-full md:w-auto px-4 py-2 text-black hover:text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Quick Category Filters */}
      <div className="bg-white border-b border-gray-200 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Tours
            </button>
            {tourCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Tours Slider */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Tours</h2>
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
            className="featured-tours-swiper"
          >
            {featuredTours.map((tour) => (
              <SwiperSlide key={tour.id}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{tour.name}</h3>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">${tour.price}</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Main Tour Grid */}
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading tours...</p>
          </div>
        ) : filteredTours.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No tours found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tour.name}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">${tour.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredTours.length > 0 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border border-gray-300 rounded-lg bg-white hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>

      {/* Tour Reviews Section */}
      <div className="bg-gray-50 py-16">
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
            className="reviews-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-quote-left text-blue-600"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <p className="text-gray-600">{review.tour}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose EuroVoyage</h2>
            <p className="text-gray-600">Experience the difference with our premium European tours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-map-marked-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guides</h3>
              <p className="text-gray-600">Our local guides bring destinations to life with their knowledge and passion.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-hotel text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Accommodations</h3>
              <p className="text-gray-600">Stay in carefully selected hotels that combine comfort and local charm.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-heart text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Service</h3>
              <p className="text-gray-600">We tailor our tours to ensure an unforgettable experience for every traveler.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;