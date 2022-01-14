import React from 'react'
import {auth, provider} from '../firebaseSetup';

function SignOut() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>
        SignOut
      </button>
    </div>
  )
}

export default SignOut
