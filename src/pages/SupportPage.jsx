import { FaHeadset, FaEnvelope, FaPhone } from "react-icons/fa6";

const faqs = [
  {
    question: "How can I download an app?",
    answer: "Simply search for the app in the search bar, click on it, and hit the 'Install' button.",
  },
  {
    question: "Can I request a refund?",
    answer: "Yes, you can request a refund within 14 days of purchase. Contact support for assistance.",
  },
  {
    question: "How do I report a bug?",
    answer: "Open the app page and click on 'Report Issue' or contact support directly using the form below.",
  },
  {
    question: "How do I contact developers?",
    answer: "Most apps provide contact info on their page. You can also reach them through our support system.",
  },
];

const SupportPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Support Center</h1>
          <p className="text-lg md:text-xl opacity-80">
            Need help? Find answers to common questions or get in touch with our support team.
          </p>
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <FaHeadset className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="font-semibold text-xl mb-2">24/7 Support</h2>
          <p className="text-gray-600">
            Our support team is always ready to assist you with any queries.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <FaPhone className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="font-semibold text-xl mb-2">Call Us</h2>
          <p className="text-gray-600">+1234 456 780</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
          <FaEnvelope className="text-4xl text-blue-600 mx-auto mb-4" />
          <h2 className="font-semibold text-xl mb-2">Email</h2>
          <p className="text-gray-600">support@heroapps.com</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Support</h2>
        <form className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="textarea textarea-bordered w-full"
          ></textarea>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
