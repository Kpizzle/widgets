import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/search';
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
  return (
    <div>
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};
