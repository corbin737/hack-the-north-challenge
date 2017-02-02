import React from 'react';
import {
  FILTER_SHOW_ALL, FILTER_SHOW_ACCEPTED,
  FILTER_SHOW_REJECTED, FILTER_SHOW_IN_REVIEW
} from '../actions/actions'

const FilterButtons = ({ filter, onFilterChanged }) => {
  return (
    <div className='btn-group btn-group-xs'>
      <button className={
        'btn btn-default ' + (filter === FILTER_SHOW_ALL ? 'active' : '')
      } onClick={e => {
        onFilterChanged(FILTER_SHOW_ALL)
      }}>Show all</button>
      <button className={
        'btn btn-default ' + (filter === FILTER_SHOW_ACCEPTED ? 'active' : '')
      } onClick={e => {
        onFilterChanged(FILTER_SHOW_ACCEPTED)
      }}>Show accepted</button>
      <button className={
        'btn btn-default ' + (filter === FILTER_SHOW_REJECTED ? 'active' : '')
      } onClick={e => {
        onFilterChanged(FILTER_SHOW_REJECTED)
      }}>Show rejected</button>
      <button className={
        'btn btn-default ' + (filter === FILTER_SHOW_IN_REVIEW ? 'active' : '')
      } onClick={e => {
        onFilterChanged(FILTER_SHOW_IN_REVIEW)
      }}>Show in review</button>
    </div>
  )
}


export default FilterButtons;
