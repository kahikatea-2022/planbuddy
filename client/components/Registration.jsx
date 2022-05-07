import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser } from '../apis/users'

function Registration() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    auth0Id: '',
    name: '',
    email: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      name: user.name,
      email: user.email,
    })
    console.log('useEffect')
    if(user?.auth0Id) {
      const newUser = {
        auth0Id: user.auth0Id,
        userName: user.name,
        email: user.email,
        currentTask: null
      }
      // console.log(newUser)
      addUser(newUser).then(console.log)
      // navigate('/welcome/new')
    }
  }, [user])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  async function handleClick(e) {
    e.preventDefault()
    // registerUser(form, authUser, history.push)
    try {
      await addUser(form)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section >
      <div className='mascot centered'><img className='mascot' src='/images/mascot.jpg' alt='bird mascot cheering you on!'></img></div>
      <form className="registration">
        <input
          name="auth0Id"
          value={form.auth0Id}
          onChange={handleChange}
          disabled={true}
          hidden={true}
          ></input>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          disabled={true}
          hidden={true}
          ></input>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          disabled={true}
          hidden={true}
        ></input>
      </form>
    </section>
  )
}

export default Registration
