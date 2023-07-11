import { useState } from 'react';

const Login = ({ handle }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    handle({
      username: username,
      password: password,
    });
    setUser(user);
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={(event) => setUsername(event.target.value)}
          id="username"
        />
      </div>
      <div>
        password
        <input
          type="text"
          value={password}
          name="Password"
          onChange={(event) => setPassword(event.target.value)}
          id="password"
        />
      </div>
      <button id="loginbtn" type="submit">login</button>
    </form>
  );
};

export default Login;
