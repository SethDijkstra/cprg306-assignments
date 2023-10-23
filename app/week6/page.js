"use client";
import React, { useState } from 'react'; 
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsData from './items.json'; 

function Page() {

  const [items, setItems] = useState(itemsData);


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold text-center">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} /> 
      <ItemList items={items} /> 
    </main>
  );
}

export default Page;