import React from "react";
import contacts from "../contacts";

console.log(contacts.length);

function Card(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map(contact => {
        return (
          <div className="card">
            <div className="top">
              <h2 className="name" key="name">
                {contact.name}
              </h2>
              <img
                className="circle-img"
                src={contact.imgURL}
                alt="avatar_img"
              />
            </div>
            <div className="bottom">
              <p className="info">{contact.phone}</p>
              <p className="info">{contact.email}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img
            className="circle-img"
            src={props.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
