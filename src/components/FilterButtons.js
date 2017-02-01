import React from 'react';

const FilterButtons = ({ onFilterChanged }) => {
  return (
    <div>
      <button onClick={e => {
        onFilterChanged('SHOW_ALL')
      }}>Show all</button>
      <button onClick={e => {
        onFilterChanged('SHOW_ACCEPTED')
      }}>Show accepted</button>
      <button onClick={e => {
        onFilterChanged('SHOW_REJECTED')
      }}>Show rejected</button>
      <button onClick={e => {
        onFilterChanged('SHOW_IN_REVIEW')
      }}>Show in review</button>
    </div>
  )
}


export default FilterButtons;
