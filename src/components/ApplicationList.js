import React from 'react'
import Application from './Application'
import ApplicationPager from '../containers/ApplicationPager'

const ApplicationList = ({
  applications, onUpdateApplicationStatus,
  isFetching, pageCount
}) => {

  let isEmpty = (applications.length === 0)

  return (
    <div>
      <span className={isFetching ? '' : 'hidden'}>Loading...</span>
      <div className={isEmpty && !isFetching ? 'alert alert-warning' : 'hidden'}>
        No items match your criteria.
      </div>
      <div className={isFetching || isEmpty ? 'hidden' : ''}>
        <table className='table'>
          <thead>
            <tr>
              <td></td>
              <td><strong>Name</strong></td>
              <td><strong>Company</strong></td>
              <td><strong>Contact</strong></td>
              <td><strong>Skills</strong></td>
              <td><strong>Status</strong></td>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, i) =>
              <Application key={i}
                           application={application}
                           onStatusUpdate={onUpdateApplicationStatus}/>
            )}
          </tbody>
        </table>

        <ApplicationPager pageCount={pageCount}/>
      </div>
    </div>
  )
}

export default ApplicationList
