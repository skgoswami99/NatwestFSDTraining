import React from 'react'

export default function Contact(props) {
  function GetId(id) {
    props.DeleteHandler(id);
  }
  return (
    <div className="col-md-2 col-5">
      <div className="card">
        <div className="card-body">
          <i onClick={GetId.bind(this, props.id)} className="fa-solid fa-circle-minus float-end text-danger fa-lg"></i>
          <h5 className="card-title">{props.firstname} {props.lastname}</h5>
          <p className="card-text">{props.email}</p>
          <p className="card-text">{props.city}</p>
          <p className="card-text">{props.phone}</p>
        </div>
      </div>
    </div>
  )
}
