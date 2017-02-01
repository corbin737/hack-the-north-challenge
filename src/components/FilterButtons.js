import React from 'react';

const FilterButtons = ({ filter, onFilterChanged }) => {
  return (
    <div className='btn-group btn-group-xs'>
      <button className={
        'btn btn-default ' + (filter === 'SHOW_ALL' ? 'active' : '')
      } onClick={e => {
        onFilterChanged('SHOW_ALL')
      }}>Show all</button>
      <button className={
        'btn btn-default ' + (filter === 'SHOW_ACCEPTED' ? 'active' : '')
      } onClick={e => {
        onFilterChanged('SHOW_ACCEPTED')
      }}>Show accepted</button>
      <button className={
        'btn btn-default ' + (filter === 'SHOW_REJECTED' ? 'active' : '')
      } onClick={e => {
        onFilterChanged('SHOW_REJECTED')
      }}>Show rejected</button>
      <button className={
        'btn btn-default ' + (filter === 'SHOW_IN_REVIEW' ? 'active' : '')
      } onClick={e => {
        onFilterChanged('SHOW_IN_REVIEW')
      }}>Show in review</button>
    </div>
  )
}


export default FilterButtons;
