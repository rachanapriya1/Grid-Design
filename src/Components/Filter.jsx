import React, { useState } from 'react';

const FilterCategories = () => {
  const categories = [
    'All',
    'Artificial Intelligence',
    'Cloud Computing',
    'DevOps',
    'Programming Languages',
    'Mobile Application Development',
    'Technology and Tools',
    'Get a Job in a Tech Company',
    'Others',
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="py-10 px-20 mt-20 bg-blue-100 ">
      <label className="text-lg font-semibold ">Filter by Category</label>
      <div className="flex flex-wrap mt-10 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`${
              activeCategory === category
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-white hover:bg-gray-100 text-gray-700'
            } border-blue-400 font-semibold py-2 px-4 rounded-full mb-2 md:mb-0 md:mr-2`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCategories;
