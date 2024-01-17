/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const registeredUsers = [
  {
    email: "admin@example.com",
    password: "Admin123#",
  },
  {
    email: "pratish989@gmail.com",
    password: "MicrosofT@@99",
  },
  {
    email: "abc@example.co.uk",
    password: "ABCabc_@10",
  },
  {
    email: "disposable.style.email.with+symbol@example.com",
    password: "disPOSE&123",
  },
  {
    email: "mattGray@labor.de",
    password: "9matt%Gray",
  },
];

console.log(registeredUsers);

function Button() {
  return <button className="login-form">Login</button>;
}

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required}
      onBlur={props.onBlur}
      
    />
  );
}

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isValidEmail = emailRegex.test(email);

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const isValidPassword = passwordRegex.test(password);

  const submitLogin = (event) => {
    event.preventDefault();
    if (!isValidEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!isValidPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (isValidEmail && isValidPassword) {
      console.log("both fields validated");
    }

    registeredUsers.forEach(
      ({ email: registeredEmail, password: registeredPassword }) => {
        if (registeredEmail === email && registeredPassword === password) {
          console.log("logged in");
          onLogin();
          navigate("/home");
        }
      }
    );
  }


  const InputStyleEmail = {
    borderColor : emailError ? 'green' : 'red'
  } 

  const InputStylePassword = {
    borderColor : passwordError ? 'green' : 'red'
  }

  return (
    <div className="login-form">
      <h2>Login Form 💼</h2>
      <form onSubmit={submitLogin}>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          // onBlur = {(e) =>  {
          //   if (e.target.value === '') {
          //     e.target.style.borderColor = 'red';
          //   } else {
          //     e.target.style.borderColor = 'black';
          //   }
          // } }
          onChange={(event) => setEmail(event.target.value)}
          style = {InputStyleEmail}
          required
        />
        {emailError && <p style={{ color: "red" }}>Invalid Email Format</p>}
        <br />
        <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          required
          // onBlur = {(e) =>  {
          //   if (e.target.value === '') {
          //     e.target.style.borderColor = 'red';
          //   } else {
          //     e.target.style.borderColor = 'black';
          //   }
          // } }
          style = {InputStylePassword}

        />
        {passwordError && (
          <p style={{ color: "red" }}>Invalid Password Format</p>
        )}
        <br />
        <Button />
      </form>
    </div>
  );
}

export default LoginPage;


// - if the email and password is valid but that doesnt match any of the email and password 
// in registeredUsers Array, then give error message

