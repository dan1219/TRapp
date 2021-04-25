import { Nav, Navbar } from 'react-bootstrap';
import React,{useContext} from 'react'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {logOut} from '../http/UserAPI'

const NavBar = observer(() => {

  const {user} = useContext(Context)

  const handleClick = () => {
    logOut()
    .then(res=>{
      console.log('logout:');
      console.log(res);

      localStorage.removeItem('token')
       user.setIsAuth(false)

    })
    .catch(e=>{
      localStorage.removeItem('token')
       user.setIsAuth(false)
      console.log('logout error:'+e);
    })
  }

  return (
    <Navbar bg="dark" variant='dark' style={{height:56}}>


    <Nav className="ml-auto">
      {user.isAuth && <Nav.Link href="#" onClick={()=>handleClick()}>Выход</Nav.Link>}
    </Nav>


</Navbar>
  )
})

export default NavBar
