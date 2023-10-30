import React from 'react';

const Item = ({ item, onSelect }) => {
  const itemCardStyle = {
    color: 'white',
    background: 'blue',
    padding: '16px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const itemHeaderStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const itemInfoStyle = {
    fontSize: '1rem',
  };

  return (
    <div className="mb-4" style={itemCardStyle} onClick={() => onSelect(item)}>
      <div style={itemHeaderStyle}>Name: {item.name}</div>
      <div style={itemInfoStyle}>Quantity: {item.quantity}</div>
      <div style={itemInfoStyle}>Category: {item.category}</div>
    </div>
  );
};

export default Item;
