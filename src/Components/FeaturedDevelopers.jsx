import React from "react";

// Example developers data
const developers = [
  {
    id: 1,
    name: "Alpha Studios",
    logo: "https://i.pravatar.cc/80?img=10",
    appsCount: 12,
    contact: "+1234 456 780",
    email: "alpha@gmail.com",
  },
  {
    id: 2,
    name: "Beta Labs",
    logo: "https://i.pravatar.cc/80?img=11",
    appsCount: 8,
    contact: "+5678 123 456",
    email: "beta@gmail.com",
  },
  {
    id: 3,
    name: "Gamma Apps",
    logo: "https://i.pravatar.cc/80?img=12",
    appsCount: 15,
    contact: "+9876 543 210",
    email: "gamma@gmail.com",
  },
];

const FeaturedDevelopersCard = ({ dev }) => {
  return (
    <div className="product-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2">
      {/* Decorative SVG element */}
      <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150">
        <div className="flex gap-1">
          <svg
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1"
            fill="none"
            viewBox="0 0 24 24"
            className="fill-gray-300 rotate-[24deg]"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </div>

      {/* Background circle */}
      <div className="absolute rounded-full bg-gray-500 z-10 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>

      {/* Developer info */}
      <div className="para uppercase text-center z-20">
        <p className="text-black font-semibold text-xs font-serif">Featured</p>
        <p className="font-bold text-xl tracking-wider text-gray-500">{dev.name}</p>
        <p className="text-gray-400 text-sm">{dev.appsCount} Apps</p>
      </div>

      {/* Logo */}
      <div className="img w-[120px] h-[120px] bg-gray-100 z-20 rounded-full flex items-center justify-center overflow-hidden">
        <img src={dev.logo} alt={dev.name} className="w-full h-full object-cover rounded-full" />
      </div>

      {/* Contact & button */}
      <div className="btm-container z-20 flex flex-col items-center gap-3 mt-4">
        <div className="grid grid-cols-1">
          <p className="font-semibold text-xs text-gray-700">{dev.contact}</p>
          <p className="font-semibold text-xs text-gray-700">{dev.email}</p>
        </div>
        <button className="uppercase font-semibold text-xs px-4 py-1 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
          View Apps
        </button>
      </div>
    </div>
  );
};

const FeaturedDevelopers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
      <h2 className="text-4xl font-bold text-center text-primary flex justify-center my-5 gap-3">
        Featured Developers
      </h2>

      <div className="flex justify-between gap-6 overflow-x-auto snap-x scrollbar-hide py-4">
        {developers.map((dev) => (
          <FeaturedDevelopersCard key={dev.id} dev={dev} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDevelopers;
