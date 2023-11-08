import { useState } from 'react'
import { useUserContext } from '../../context/userContext'
import axios from 'axios'

const LoginModal = () => {

  const { user, setUser } = useUserContext()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:7070/api/users/login', formData)
      const user = res.data.token
      localStorage.setItem('token', JSON.stringify(res.data.token))
      setUser(user)
      console.log(user);
      console.log(res.data);
    } catch (error) {
      console.log('Login error', error);
    }
  }

  return (
    <>
      {user ? (
        <button type="button" className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Login
        </button>
      )}

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Please login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit} className="modal-body" autoComplete='off'>
              <div className='mb-3'>
                <label htmlFor="email" className="form-label">Email</label>
                <input value={formData.email} onChange={handleChange} type="email" name='email' className="form-control" id="email" autoComplete='off' />
              </div>
              <div className='mb-3'>
                <label htmlFor="password" className="form-label">Password</label>
                <input value={formData.password} onChange={handleChange} type="password" name='password' className="form-control" id="password" autoComplete='new-password' />
              </div>
              <div className="mb-3 d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Register</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal