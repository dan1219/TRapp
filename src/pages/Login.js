import { Button, Card, Container, Form } from 'react-bootstrap';
import React,{useContext,useState} from 'react'

import {Context} from '../index'
import {logIn} from '../http/UserAPI'
import {validation} from '../http/validation'

const Login = (props) => {
  const {user} = useContext(Context)
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')

  const signIn = () => {
      try {

        const validationError=validation(login,password)
        if (validationError){
          setErrorMessage(validationError)
          return
        }else{
          setErrorMessage('')
        }
        logIn(login,password)
        .then(res=>{
          const data = res.data
          console.log(res);
          console.log('token:'+data.auth_token);
          localStorage.setItem('token',data.auth_token)
          user.setIsAuth(true)
        })
        .catch(e=>{
          setErrorMessage('Неправильная пара логин/пароль')
          console.log("error:"+e);
        })
      }catch(e){

      }



  }


  return (
    // <div>
    // <h1>Авторизация</h1>
    // <button onClick={()=>{signIn()}}>Войти</button>
    // </div>

    <Container className='d-flex justify-content-center align-items-center'
               style={{height:window.innerHeight - 56}}

    >
      <Card style={{width:600}} className='p-5'>
          <h2 className='m-auto'>Авторизация</h2>
          <div className=' text-danger' style={{margin:'10px auto 0'}}>{errorMessage}</div>
          <Form className='d-flex flex-column' onSubmit={(e)=>{e.preventDefault();signIn()}}>

            <Form.Control
              className="mt-3"
              placeholder='Введите логин'
              value={login}
              onChange={(e)=>setLogin(e.target.value)}
            />
            <Form.Control
              className="mt-3 border"
              placeholder='Введите пароль'
              type='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          <Button
            className='mt-3 align-self-end btn-dark'
            type='submit'
            onClick={()=>signIn()}
          >
            Авторизация
          </Button>
          </Form>


      </Card>

    </Container>
  )
}

export default Login
