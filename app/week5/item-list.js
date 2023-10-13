// 1. Setup ItemList Component
"use client";
import React, { useState } from 'react';
import Item from './item'; // Assuming you have an Item component in the same folder
import itemsData from './items.json'; // Assuming you have a items.json file in the same folder

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedByCategory = sortedItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div style={{ fontFamily: 'Georgia, serif', padding: '20px', backgroundColor: '#f5f5f5', color: '#333' }}>
            <h1 style={{ fontSize: '2em', borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>Item List</h1>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', marginBottom: '20px' }}>
                <button 
                    onClick={() => setSortBy("name")} 
                    style={{ 
                        background: 'linear-gradient(to right, #ADD8E6, white)',
                        border: '1px solid #a89f91',
                        color: '#333',
                        padding: '5px 15px',
                        margin: '0 10px',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '0.9em',
                        fontFamily: 'Georgia, serif'
                    }}
                    onMouseOver={e => e.target.style.background = 'linear-gradient(to right, #ADD8E6, white)'}
                    onMouseOut={e => e.target.style.background = 'linear-gradient(to right, #ADD8E6, white)'}
                >
                    Sort by Name
                </button>
                <button 
                    onClick={() => setSortBy("category")} 
                    style={{ 
                        background: 'linear-gradient(to right, #ADD8E6, white)',
                        border: '1px solid #a89f91',
                        color: '#333',
                        padding: '5px 15px',
                        margin: '0 10px',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '0.9em',
                        fontFamily: 'Georgia, serif'
                    }}
                    onMouseOver={e => e.target.style.background = 'linear-gradient(to right, #ADD8E6, white)'}
                    onMouseOut={e => e.target.style.background = 'linear-gradient(to right, #ADD8E6, white)'}
                >
                    Sort by Category
                </button>
                <button 
                    onClick={() => setSortBy("grouped")} 
                    style={{ 
                        background: 'linear-gradient(to right, #ADD8E6, white)',
                        border: '1px solid #a89f91',
                        color: '#333',
                        padding: '5px 15px',
                        margin: '0 10px',
                        cursor: 'pointer',
                        transition: '0.3s',
                        fontSize: '0.9em',
                        fontFamily: 'Georgia, serif'
                    }}
                    onMouseOver={e => e.target.style.background = 'linear-gradient(to right, #ADD8E6, white)'}
                    onMouseOut={e => e.target.style.background = 'linear-gradient(to right, #ADD8E6, white)'}
                >
                    Group by Category
                </button>
            </div>
    
            <div>
                {sortBy !== "grouped"
                    ? sortedItems.map(item => <Item key={item.id} item={item} />)
                    : Object.entries(groupedByCategory).map(([category, items]) => (
                        <div key={category} style={{ marginBottom: '20px' }}>
                            <h2 style={{ fontSize: '1.5em', borderBottom: '1px solid #666', paddingBottom: '5px', marginBottom: '10px' }}>{category}</h2>
                            {items.map(item => (
                                <Item key={item.id} item={item} />
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

