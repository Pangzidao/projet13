import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../store";
import { useState } from "react";
import { getLogin } from "../data";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(0);

  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.logged);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    getLogin({ email: email, password: password }).then((res) => {
      setLoginStatus(res.status)
        if (loginStatus === 200) {
          dispatch(logIn());
          console.log(loginState)
        }
      }
    );
  }



  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
