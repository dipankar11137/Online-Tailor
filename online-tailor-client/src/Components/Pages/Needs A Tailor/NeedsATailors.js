import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import NeedsATailor from './NeedsATailor';

const NeedsATailors = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/tailors')
      .then(res => res.json())
      .then(data => {
        setCards(data);

        setFilteredCards(data);
      });
  }, []);
  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter cards based on search query
    const filtered = cards.filter(card =>
      card.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };
  return (
    <div className=" lg:m-4 rounded-2xl pb-8 bg-slate-900">
      <div className="px-12 mx-auto  mb-4">
        <div className="flex justify-between mx-20  text-center items-center mr-20 mb-5 mt-[-5px]">
          <div>
            <h1 className="text-slate-100 text-center text-5xl  font-bold py-6">
              Our Tailors
            </h1>
          </div>
          <div className=" ">
            <div className="relative">
              <input
                className="text-black h-10 w-[300px] rounded-lg text-xl pl-2 pr-10 shadow-2xl shadow-indigo-600 hover:shadow-2xl hover:shadow-red-700 border-2 border-black"
                type="text"
                placeholder="Search by Address..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-3">
          {filteredCards.slice(0, 8).map(service => (
            <NeedsATailor
              key={service.id}
              title={service.name}
              tailor={service}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeedsATailors;