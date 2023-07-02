import React, { useState } from "react";

function SearchBar({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
