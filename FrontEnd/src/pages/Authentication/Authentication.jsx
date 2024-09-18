import { useState } from "react";
import './authentication.css';
import login from '/assets/file.png';
import { useNavigate } from 'react-router-dom'; 

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const goBack = () => {
    console.log("Go Back button clicked"); // Debugging
    navigate('/');
  };

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setPasswordError(isValid ? "" : "Password must be at least 6 characters");
  };

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? "" : "Invalid email address");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Simple validation before form submission
    const errors = {};

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      errors.email = "Invalid email address";
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    const isValidPassword = password.length >= 6;
    if (!isValidPassword) {
      errors.password = "Password must be at least 6 characters";
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }

    if (Object.keys(errors).length === 0) {
      console.log("Sign-in successful with:", { email, password });
      navigate("/");
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div className="containen">
      <div className="forms-containen">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Sign in now</h2>

            <input
              type="email"
              spellCheck="false"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            <small className="email-error">{emailError}</small>

            <input
              placeholder="Enter Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            <small className="password-error">{passwordError}</small>

            <button className="button" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>

      <div className="panels-containen">
        <div className="panel right-panel">
          <div className="content">
            <h3 style={{ color: 'black' }}>Have an account?</h3>
            <button onClick={goBack} className="button" type="submit">Go Back</button>
          </div>
          <img src={login} className="image" alt="login" />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
