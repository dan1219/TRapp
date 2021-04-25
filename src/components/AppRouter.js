
import {Switch,Route,Redirect,useHistory} from 'react-router-dom'
import {authRoutes,publicRoutes} from '../routes'
import {LOGIN_ROUTE,USERS_ROUTE} from '../utils/consts'
import React,{useContext,useEffect} from 'react'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {getUsers} from '../http/UserAPI'

const AppRouter = observer(() => {
  const {user} = useContext(Context)

  const history = useHistory()

  if(localStorage.getItem('token'))
      user.setIsAuth(true)







    // user.setIsAuth(true)
      // console.log(user.isAuth);
    // user.setIsAuth(false)

  // const isAuth = false;
  return (
    <Switch>



        {user.isAuth && authRoutes.map( ({path,component})=>{
          return <Route key={path} path={path} component={component} />
        })}

        {!user.isAuth && publicRoutes.map( ({path,component})=>{
          return <Route key={path} path={path} component={component} />
        })}




        // {user.isAuth ? <Redirect to={USERS_ROUTE}/>:<Redirect to={LOGIN_ROUTE}/> }






    </Switch>
  )
})

export default AppRouter
