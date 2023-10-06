"use client";
import { useState } from "react";


export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-white flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-96 shadow-2xl">
        <h1 className="text-3xl text-indigo-600 font-semibold mb-4 text-center">
          Add New Item
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label className="text-gray-600">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 w-full rounded-md bg-gray-100 focus:bg-white border border-gray-300 focus:border-indigo-500 text-black"
            />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-600">Quantity:</label>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="mt-1 p-2 w-full rounded-md bg-gray-100 focus:bg-white border border-gray-300 focus:border-indigo-500 text-black"
            />
          </div>
  
          <div className="mb-4">
            <label className="text-gray-600">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 w-full rounded-md bg-gray-100 focus:bg-white border border-gray-300 focus:border-indigo-500 text-black"
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
  
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md cursor-pointer"
          >
            Add to List
          </button>
        </form>
      </div>
    </main>
  );
  
  
  
}
          