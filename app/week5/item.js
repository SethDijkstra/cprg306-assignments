

// item.js
function Item({ item }) {
  return (
      <div style={{ backgroundColor: 'white', color: 'black', padding: '10px', margin: '5px', border: '1px solid black' }}>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <p>{item.quantity}</p>
          
      </div>
  );
}

export default Item;
