import React from 'react';

const SearchBar = ({ onSearchTextChanged }) => {

  let input

  return (
    <div>
      <form onChange={e => {
        e.preventDefault();
        onSearchTextChanged(input.value)
      }}>
        <input ref={node => {
          input = node
        }} className='form-control input-lg' placeholder='Search...'/>
      </form>
    </div>
  )
}


export default SearchBar;
