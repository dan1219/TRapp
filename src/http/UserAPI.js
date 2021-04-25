import {$authHost,$host} from './index'

export const logIn = async (login,password) => {
    const response = await $host.post('api/token/login/',{username:login,password:password})
    return response
}

export const getUsers = async () => {

    const response = await $authHost.get('api/users/')
    return response
}

export const logOut = async () => {
  const response = await $authHost.post('api/token/logout/')
  return response
}
