import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const usernameValue = event.currentTarget.value;
    setUsername(usernameValue);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Hello ${username}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          onChange={onChange}
          type="text"
          placeholder="username"
        />

        <button>Log in</button>
      </form>
    </div>
  );
};

export default App;
