"use client";
import React, { useState } from 'react'; 
import ItemList from './item-list'; 
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json'; 

function HomePage() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name.split(',')[0].trim(); 
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="p-4 flex flex-col" style={{
      backgroundImage: 'linear-gradient(black, black)',
      height: '100vh'
    }}>
      <h1 className="text-4xl font-bold text-center mb-4">Shopping List</h1>
      <div className="flex space-x-4 w-full">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} /> 
          <ItemList items={items} onItemSelect={handleItemSelect} /> 
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;

