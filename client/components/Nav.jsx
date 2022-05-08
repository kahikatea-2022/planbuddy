import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Nav() {
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout()
  }

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  return (
    <nav>
      <div className="logo">
        <u>
          <h1>PlanBuddy</h1>
        </u>
        <img className="pencil" src="/images/Pencil.png"></img>
      </div>
      <section className="nav-item">
        <IfAuthenticated>
          <section className="sign">
            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </section>
        </IfAuthenticated>
        <IfNotAuthenticated>
          {/* <section className='nav-item'> */}

          <section className="sign">
            <a href="/" onClick={handleLogin} className="nav-link">
              Sign in
            </a>
            <a href="/" onClick={handleRegister} className="nav-link">
              Register
            </a>
          </section>
          {/* </section> */}
        </IfNotAuthenticated>
      </section>
    </nav>
  )
}

export default Nav

//Still undecided as to whether planBuddy icon is static or if it displays hamburger menu.
//We're thinking to instead have the buddy/mascot display the hamburger icon <- we reckon this option.
