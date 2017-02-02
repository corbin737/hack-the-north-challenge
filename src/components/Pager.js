import React from 'react'
import './Pager.css'

const Pager = ({ currentPage, changePage, pageCount }) => {
  return (
    <nav className='text-center'>
      <button className='btn btn-default'
              disabled={currentPage === 1 ? 'disabled' : ''}
              style={{'borderRadius':1000}}
              onClick={e => {
                changePage(currentPage - 1)
                window.scrollTo(0, 0)
              }}
      ><i className='fa fa-caret-left'></i> Previous</button>
      <span className='pager-page-display'>{currentPage} / {pageCount}</span>
      <button className='btn btn-default'
              disabled={currentPage === pageCount ? 'disabled' : ''}
              style={{'borderRadius':1000}}
              onClick={e => {
                changePage(currentPage + 1)
                window.scrollTo(0, 0)
              }}
      >Next <i className='fa fa-caret-right'></i></button>
    </nav>
  )
}

export default Pager
