import React, { useEffect, useRef } from "react";

function LoginForm() {
  const usernameRef = useRef(null);

  useEffect(() => {
    // Automatically focus the username input
    usernameRef.current.focus();
  }, []);

  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Login Form</h2>

      <div>
        <label>Username</label>
        <br />
        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter Username"
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter Password"
        />
      </div>

      <br />

      <button>Login</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;