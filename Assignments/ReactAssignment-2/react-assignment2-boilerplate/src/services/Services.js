

export default function Auth() {


    return fetch('http://localhost:3001/auth/v1/isAuthenticated', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => res.json())
    
}