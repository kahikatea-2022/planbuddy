import { setUser } from './actions/user'
import { getUserRoles, getUsers } from './apis/users'
import store from './store'

const emptyUser = {
  auth0Id: '',
  email: '',
  name: '',
  token: '',
  id: '',
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
      const userFromDb = users.find((el) => el.email === user.name)
      // console.log(user)
      console.log(userFromDb)

      const token = await getAccessTokenSilently()
      // const roles = await getUserRoles(user.sub)
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        name: user.nickname,
        id: userFromDb.userId,
        token,
      }
      // removed roles from userToSave
      console.log(userToSave)
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
  const redirectUri = `${window.location.origin}/profile`
  return () =>
    loginWithRedirect({
      redirectUri,
      screen_hint: 'signin',
      scope: 'role:member',
    })
}
