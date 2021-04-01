import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import Login from './forms/Login'
import SignUp from './forms/SignUp'
import { auth } from '../firebase'
import '../assets/styles/app_headerImage.css'

export function Header({ user, classes, openSignIn, onCloseSignIn }) {
  const [signUp, setSignUp] = useState(false)
  const [signIn, setSignIn] = useState(false)
  return (
    <>
      <SignUp
        open={signUp}
        closeSignUp={() => setSignUp(false)}
        classes={classes}
      />
      <Login
        open={signIn || openSignIn}
        closeLogin={() => {
          signIn && setSignIn(false)
          openSignIn && onCloseSignIn()
        }}
        classes={classes}
      />
      <div className='app_header'>
        <img
          className='app_headerImage'
          src='https://www.photogram.ai/images/photogram.ai2x.png'
          alt=''
        />

        <div className='logoutButton'>
          {user ? (
            <>
              <Typography>{user.displayName}</Typography>
              <Button onClick={() => auth.signOut()}>Logout</Button>
            </>
          ) : (
            <div className='loginContainer'>
              <Button onClick={() => setSignIn(true)}>Sign In</Button>
              <Button onClick={() => setSignUp(true)}>Sign Up</Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
