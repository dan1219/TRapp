import { Col, Container, Row } from 'react-bootstrap';
import React,{useContext,useEffect,useState} from 'react'

import {Context} from '../index'
import { getUsers } from '../http/UserAPI';

const Users = (props) => {
  const [users,setUsers] = useState([])
  const [ascendingOrder,setAscendingOrder] = useState(true)

  const {user} = useContext(Context)

  const handleClick = () =>{

    let currentOrder = ascendingOrder
    currentOrder = !currentOrder
    let sortUsers = users;
    sortUsers.sort((a,b)=>{
        if (currentOrder)
            return a.id-b.id
        return b.id-a.id
      });
    setUsers(sortUsers)
    setAscendingOrder(currentOrder)


  }


  useEffect(()=>{
      getUsers()
      .then(res=>{
        console.log('get сработал');
        console.log(res);
        setUsers(res.data.map(user=>{
          return(
            {id:user.id,username:user.username}
          )
        }))



      })
      .catch(e=>{
        console.log('get error:'+e);
        localStorage.removeItem('token')
        user.setIsAuth(false)

      })


  },[])


  return (
    <div>
      <Container>
          <Row className="bg-light">
            <Col className='border text-center'><h1>Список пользователей</h1></Col>
          </Row>

          <Row className="bg-light text-info">
            <Col className='border text-center'>Имя пользователя</Col>
            <Col className='border text-center' >
              <div onClick={()=>handleClick()}>
                  {ascendingOrder ? <div>ID ↓</div>:<div>ID ↑</div>}
              </div>

            </Col>
          </Row>
          {users.map((user)=>{
            return(
              <Row key={user.id}className="bg-light">
                <Col className='border text-center'>{user.username}</Col>
                <Col className='border text-center' >{user.id}</Col>
              </Row>
            )
          })}

      </Container>

    </div>
  )
}

export default Users
