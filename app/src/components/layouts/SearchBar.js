import React from 'react';
import { InputGroup, Input, Icon, Placeholder } from 'rsuite';

const SearchBar = () => {
  return (
    <InputGroup
      style={{
        justifyContent: 'center',
        width: '80%',
        marginLeft: '200px',
        marginTop: '20px',
        margin: "0 auto",
        
      }}
    >
      <Input placeholder='Search' />
      <InputGroup.Button>
        <Icon icon='search' />
      </InputGroup.Button>
    </InputGroup>
  );
};
export default SearchBar;
