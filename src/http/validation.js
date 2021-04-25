export const validation = (login,password) =>{
  if (!login)
      return 'Введите логин'
  if (!password)
      return 'Введите пароль'

  return ''
}
