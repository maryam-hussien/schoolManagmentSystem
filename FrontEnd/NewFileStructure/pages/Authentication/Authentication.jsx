import { useState } from "react";
import './authentication.css';
import { useNavigate } from 'react-router-dom'; 
import { Envelope, Lock } from 'react-bootstrap-icons';
import img from '../../assets/Images/child1.jpg';
function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const navigate = useNavigate();

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
    if (emailError === "" && passwordError === "") {
      navigate("/");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="container">
      <div className="mixed">
        <div className="form-container">
          <h1>Welcome to School Team</h1>
          <form onSubmit={handleSignIn}>
            <div className="input-with-icon">
              <Envelope className="input-icon" />
              <input
                style={{ borderRadius: '30px', width: "100%", border: "2px double #000", paddingLeft: '40px' }} 
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
            </div>
            <small>{emailError}</small>

            <div className="input-with-icon">
              <Lock className="input-icon" onClick={togglePasswordVisibility} style={{ cursor: 'pointer'}} />
              <input
                style={{ borderRadius: '30px', width: "100%", border: "2px double #000", paddingLeft: '40px' }} 
                type={isPasswordVisible ? "text" : "password"} 
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
            </div>
            <small>{passwordError}</small>

            <button type="submit">Login</button>
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          </form>
        </div>
        <div className="image-container">
          <img src={img} alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
