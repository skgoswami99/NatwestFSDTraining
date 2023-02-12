import React from 'react'
import Contact from '../Contact/Contact'
import { useNavigate } from 'react-router-dom';
export default function ContactList() {
  // if (Math.random() > 0.5) {
  //   throw Error('Error Occurred');
  // }
  const navigate = useNavigate();
  const [contacts, setContacts] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:9000/auth/isAuthenticated', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
      .then(data => {
        if (data.status === 401) {
          navigate("/login");
        }
      });
    fetch('http://localhost:3001/contacts')
      .then(res => res.json())
      .then(data => {
        setContacts(data)
      });
  }, [])

  function DeleteContact(id) {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'DELETE'
    }).then(res => res.json)
      .then(data => {
        let res = contacts.filter(item => item.id !== id);
        setContacts(res);
      });
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <h2 id="heading1" className="text-center">Contact List</h2>
        {
          contacts.map(item => <Contact DeleteHandler={DeleteContact} key={item.id} id={item.id} firstname={item.firstname} lastname={item.lastname} email={item.email} city={item.city} phone={item.phone} />)
        }
      </div>
    </div>
  )
}
