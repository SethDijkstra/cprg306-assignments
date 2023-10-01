
export default function Item({ name, quantity, category }) {
    return (
      <div className="w-full max-w-xs mx-auto bg-white rounded-lg p-4 shadow-md my-4">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <p className="text-gray-600">Buy {quantity} in {category}</p>

      </div>
    );
  }
