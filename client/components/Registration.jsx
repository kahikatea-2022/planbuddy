import React, { useEffect, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser, getUsers } from '../apis/users'
import { addUserId} from '../auth0-utils'
import { updateUser } from '../actions/user'
import { useAuth0 } from '@auth0/auth0-react'
import PlanBuddy from './PlanBuddy'
function Registration() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  function checkUser(){
    if(user?.name) {
      getUsers().then(users=>{
        if(users.find(el=>el.auth0Id === user.auth0Id)) navigate('/welcome/veteran')
      }).catch(console.error)
    }
  }
  checkUser()
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
      addUser(newUser).then(data=>{
        console.log(data)
        dispatch(updateUser({id: data.body.newId[0], currentTask: null}))
      }).catch(console.error)
      navigate('/welcome/new')
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
      {/* This is our stretched mascot, feed pls */}
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
