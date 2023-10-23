import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');
  const itemsCopy = [...items];

  itemsCopy.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="bg-gray-800 text-gray-200 font-serif">
      <div className="p-4 space-x-2">
        <button
            onClick={() => setSortBy('name')}
            className={`py-2 px-4 rounded focus:outline-none border-2 ${sortBy === 'name' ? 'bg-light-blue-500  border-light-blue-500' : 'bg-gray-700 border-gray-500'}`}
            >
            Sort by Name
        </button>
        <button
            onClick={() => setSortBy('category')}
            className={`py-2 px-4 rounded focus:outline-none border-2 ${sortBy === 'category' ? 'bg-light-blue-500  border-light-blue-500' : 'bg-gray-700 border-gray-500'}`}
            >
            Sort by Category
        </button>
        <button
            onClick={() => setSortBy('grouped')}
            className={`py-2 px-4 rounded focus:outline-none border-2 ${sortBy === 'grouped' ? 'bg-light-blue-500  border-light-blue-500' : 'bg-gray-700 border-gray-500'}`}
            >
            Group by Category
        </button>

      </div>
      {sortBy === 'grouped' ? (
        <div className="p-4">
          {Object.keys(
            itemsCopy.reduce((acc, item) => {
              if (!acc[item.category]) {
                acc[item.category] = [];
              }
              acc[item.category].push(item);
              return acc;
            }, {})
          )
            .sort(sortAlphabetically)
            .map((category) => (
              <div key={category} className="mb-6">
                <h2 className="text-light-blue-500 text-xl mb-4">{category}</h2>
                {itemsCopy
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Item key={item.id} item={item} />
                  ))}
              </div>
            ))}
        </div>
      ) : (
        <div className="p-4">
          {itemsCopy.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;

function sortAlphabetically(a, b) {
  return a.localeCompare(b);
}


