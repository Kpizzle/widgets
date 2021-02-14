import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/search';
import Dropdown from './components/Dropdown';

const options = [
  {
    label: 'The Colour Red',
    value: 'red',
  },
  {
    label: 'The Colour Green',
    value: 'green',
  },
  {
    label: 'The Colour Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
      {/* <Search /> */}
    </div>
  );
};
