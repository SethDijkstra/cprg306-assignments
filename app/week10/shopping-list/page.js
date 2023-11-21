"use client";

import React, { useEffect, useState } from "react";
import { getItems, addItem } from "../_services/shopping-list-services";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    useEffect(() => {
        async function loadItems() {
            if (user) {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            }
        }
        loadItems();
    }, [user?.uid]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name, quantity, category };
        await handleAddItem(newItem);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    const handleAddItem = async (itemObj) => {
        if (user) {
            const newItemId = await addItem(user.uid, itemObj);
            setItems([...items, { ...itemObj, id: newItemId }]);
        }
    };

    return (
        <main className="bg-gray-800 p-6 rounded-lg text-gray-200 font-serif">
            <header>
                <h1 className="text-2xl font-bold mb-4 text-light-blue-500">Shopping List</h1>
            </header>
            <section>
                {user ? (
                    <>
                        <p>Welcome, {user.email}! You are signed in.</p>
                        <div className="mb-4">
                            <form onSubmit={handleSubmit}>
                                {/* Name Input */}
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-light-blue-300 text-gray-800 bg-gray-200"
                                    />
                                </div>

                                {/* Quantity Input */}
                                <div className="mb-4">
                                    <label htmlFor="quantity" className="block mb-2">Quantity</label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        min="1"
                                        max="99"
                                        required
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-light-blue-300 text-gray-800 bg-gray-200"
                                    />
                                </div>

                                {/* Category Select */}
                                <div className="mb-4">
                                    <label htmlFor="category" className="block mb-2">Category</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-light-blue-300 text-gray-800 bg-gray-200"
                                    >
                                        
                                        <option value="produce">Produce</option>
                                        <option value="dairy">Dairy</option>
                                        <option value="meat">Meat</option>
                                        <option value="bakery">Bakery</option>

                                    </select>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50">
                                    Add Item
                                </button>
                            </form>
                        </div>

                        
                        <div>
                            {items.map(item => (
                                <div key={item.id}>
                                    <p>{item.name}</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.category}</p>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>You are not signed in!</p>
                )}
            </section>
        </main>
    );
}
