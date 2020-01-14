import app from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDiwGhGDVQCzz5NfT39n3_Fj4ZMxLTFIAY",
  authDomain: "ccbsystem-98f0a.firebaseapp.com",
  databaseURL: "https://ccbsystem-98f0a.firebaseio.com",
  projectId: "ccbsystem-98f0a",
  storageBucket: "ccbsystem-98f0a.appspot.com",
  messagingSenderId: "631009185221",
  appId: "1:631009185221:web:d12eaff1e8cf152b884fac"
}

export default class Firebase {
  constructor( ) {
    app.initializeApp( firebaseConfig )
    this.db = app.database( )
  }

  getConfirm = path => {
    return this.db.ref( `/users/${ path }` ).once( 'value' ).then(
      snapshot => {
        let email = ( snapshot.val( ) && snapshot.val( ).email) || 'not register'
        return email
      }
    )
  }

  getUser = path => {
    return this.db.ref( `/users/${path}` ).once( 'value' ).then(
      snapshot => {
        let user
        let email = ( snapshot.val( ) && snapshot.val( ).email) || 'not register'
        if ( email !== 'not register' ){
          let pass = ( snapshot.val( ) && snapshot.val( ).pass )
          let image = ( snapshot.val( ) && snapshot.val( ).imgProfile ) || null
          user = {
              email: email,
              pass: pass,
              image: image
          }
          return user
        } else
          return 'not register'
      }
    )
  }

  user = userid => this.db.ref( `users/${ userid }` )
  users = ( ) => this.db.ref( `users` )
}
