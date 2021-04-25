import React from 'react'
import {makeAutoObservable} from 'mobx'

class UserStore {
    constructor(){
      //this._isAuth = false

;
      this._isAuth = localStorage.getItem('_isAuth')
          if (!this._isAuth)
              this._isAuth = false;
    

      makeAutoObservable(this)
    }

    setIsAuth(flag){
      this._isAuth = flag
    }

    get isAuth(){
      return this._isAuth
    }


}
export default UserStore;
