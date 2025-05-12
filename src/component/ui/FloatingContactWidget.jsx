import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end  ">
      {isOpen && (
        <div className="mb-3 space-y-2 animate-fade-in ">
          <a
            href="tel:+917800031888"
            className="bg-red-500 text-white text-2xl px-4 py-2 rounded-full shadow-md flex items-center space-x-2 hover:bg-red-600 transition"
          >
            <FaPhone />
            {/* <span>Call</span> */}
          </a>
          <a
            href="https://wa.me/917800031888"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-2xl text-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 hover:bg-green-600 transition"
          >
            <FaWhatsapp />
            {/* <span>WhatsApp</span> */}
          </a>
        </div>
      )}

      <button
        onClick={toggleWidget}
        className={`bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out cursor-pointer ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        {isOpen ? <FaTimes size={20} /> : <FaCommentDots size={20} />}
      </button>
    </div>
  );
};

export default FloatingContactWidget;
