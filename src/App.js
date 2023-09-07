import React, { useState } from "react";
import Timer from "./Timer";
import BreakTimer from "./BreakTimer;
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  // Function to handle Google Sign-In
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to sign out
  const signOut = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Hello, {user.displayName}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>Pomodoro Timer</h1>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </>
      )}
      <Timer />
      {/* Render BreakTimer component when the timer reaches 0 */}
      {/* <BreakTimer /> */}
    </div>
  );
}

export default App;
