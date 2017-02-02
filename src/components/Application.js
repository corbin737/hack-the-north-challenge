import React from 'react';
import './Application.css'
import StarRating from './StarRating'

const Application = ({ application, onStatusUpdate }) => {

  let accepted = (application.status === 'accepted')
  let rejected = (application.status === 'rejected')

  return (
    <tr>
      <td><img src={application.picture} alt='Application' width='50' height='50'/></td>
      <td>{application.name}</td>
      <td>{application.company}</td>
      <td>
        <i className='fa fa-envelope-o fa-fw'></i> <a href={'mailto:' + application.email}>{application.email}</a><br/>
        <i className='fa fa-phone fa-fw'></i> <a href={'tel:' + application.phone}>{application.phone}</a>
      </td>
      <td>
        <div>
          {application.skills.map((skill, i) =>
            <span key={i}>
              <span><strong>{skill.skill}</strong></span>
              <span className='pull-right'>
                <StarRating rating={skill.rating}/>
              </span>
              {(i !== application.skills.length - 1 ? (<hr className='no-margin'/>) : '')}
            </span>
          )}
        </div>
      </td>
      <td>{accepted ? 'Accepted' : rejected ? 'Rejected' : 'In Review'}</td>
      <td>
        <div className='btn-group btn-group-xs'>
          <button className={
            'btn ' + (accepted ? 'btn-success disabled' : 'btn-default')
          } onClick={e => {
            onStatusUpdate(application.email, 'accepted')
          }}>{accepted ? 'Accepted' : 'Accept'}</button>
          <button className={
            'btn ' + (rejected ? 'btn-danger disabled' : 'btn-default')
          } onClick={e => {
            onStatusUpdate(application.email, 'rejected')
          }}>{rejected ? 'Rejected' : 'Reject'}</button>
          <button className='btn btn-default' onClick={e => {
            onStatusUpdate(application.email, 'in_review')
          }}>Reset</button>
        </div>
      </td>
    </tr>
  )
}

export default Application;
