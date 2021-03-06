import { useAuth0 } from '@auth0/auth0-react'
import { setUser } from './actions/user'
import { getUserRoles, getUsers } from './apis/users'
import store from './store'

const emptyUser = {
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  id: '',
  currentTask: '',
  roles: [],
}

function saveUser(user = emptyUser) {
  store.dispatch(setUser(user))
}

export async function cacheUser(useAuth0) {
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  if (isAuthenticated) {
    try {
      const users = await getUsers()
      // add logic to add user id to user for all functionality
      // needs to be able to post a new user
      // console.log(users)
      // console.log(user)
      const userFromDb = users.find((el) => el.email === user.name)
      // console.log(userFromDb)

      const token = await getAccessTokenSilently()
      // const roles = await getUserRoles(user.sub)
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        name: user.nickname,
        id: userFromDb?.userId,
        currentTask: userFromDb?.currentTask,
        token,
      }
      // removed roles from userToSave
      // console.log(userToSave)
      saveUser(userToSave)
    } catch (err) {
      console.error(err)
    }
  } else {
    saveUser()
  }
}

export function getLoginFn(useAuth0) {
  return useAuth0().loginWithRedirect
}

export function getLogoutFn(useAuth0) {
  return useAuth0().logout
}

export function getIsAuthenticated(useAuth0) {
  return useAuth0().isAuthenticated
}

export function getRegisterFn(useAuth0) {
  const { loginWithRedirect } = useAuth0()
  const redirectUri = `${window.location.origin}/register`
  return () =>
    loginWithRedirect({
      redirectUri,
      screen_hint: 'signup',
    })
}

export async function addUserId(user) {
  const users = await getUsers()
  const userFromDb = users.find((el) => el.email === user.name)
  const update = {
    id: userFromDb?.userId,
    currentTask: userFromDb?.currentTask,
    fishing: 'heck yeah',
  }
  console.log(update)
  return update
}
