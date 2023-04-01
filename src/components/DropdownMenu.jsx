import React, { useState } from 'react';
import "../styles/dropdownMenu.css"
function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Dropdown</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
          <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
          <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
        </ul>
      )}
      {selectedItem && <p>Selected item: {selectedItem}</p>}
    </div>
  );
}

export default DropdownMenu;