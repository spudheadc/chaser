import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EmailAuthProvider, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from './context/AuthContext';
import { auth } from "./firebase";
import StyledFirebaseAuth from './components/StyledFirebaseAuth/StyledFirebaseAuth';
import { GoogleMap } from './components/GoogleMap/GoogleMap';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    FacebookAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
}

function App() {
  return (
    <div className="App">
      <AuthContext.Consumer>
        {(user) => {
          if (user) {
            return <>
              <GoogleMap style={{ width: "100%", height: "100vh" }} />
            </>;
          } else {
            return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          }

        }}

      </AuthContext.Consumer>

    </div>
  );
}

export default App;
