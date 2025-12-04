import { FaUsers, FaRocket, FaGlobe } from "react-icons/fa6";
// import TeamMemberCard from "../ui/TeamMemberCard"; // Optional, reusable component

const teamMembers = [
  {
    id: 1,
    name: "Raihan Naim",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Sara Khan",
    role: "Lead Developer",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=34",
  },
  {
    id: 4,
    name: "Lina Roy",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/150?img=35",
  },
];

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Hero Apps</h1>
          <p className="text-lg md:text-xl opacity-80">
            We are committed to bringing the best apps to millions of users around the world. Innovation, quality, and user experience are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Mission / Vision Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaRocket className="text-4xl text-blue-600 mb-4" />
          <h2 className="font-semibold text-xl mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To provide users with the most innovative and reliable apps that make life easier and more enjoyable.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h2 className="font-semibold text-xl mb-2">Our Team</h2>
          <p className="text-gray-600">
            A passionate team of developers, designers, and marketers working together to create a seamless app experience for everyone.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <FaGlobe className="text-4xl text-blue-600 mb-4" />
          <h2 className="font-semibold text-xl mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become the most trusted app marketplace in the world, connecting developers with users in a meaningful way.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values / Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Hero Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <h3 className="font-semibold text-xl mb-2">Quality Apps</h3>
              <p className="text-gray-600">
                Every app is carefully vetted and tested to ensure it meets our high standards.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <h3 className="font-semibold text-xl mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                We prioritize security and reliability, providing a safe environment for users and developers.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
              <h3 className="font-semibold text-xl mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Our platform connects developers with millions of users worldwide seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
