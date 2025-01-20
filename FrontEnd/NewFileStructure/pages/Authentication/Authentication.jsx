import { useState } from "react";
import './authentication.css';
import { useNavigate, NavLink } from 'react-router-dom';
import { Envelope, Lock, Eye, EyeSlash } from 'react-bootstrap-icons';
import img from '../../assets/images/child1.jpg';

function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); // New: Success message
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? "" : "Invalid email address");
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setPasswordError(isValid ? "" : "Password must be at least 6 characters");
    return isValid;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setApiError(""); // Reset API error
    setSuccessMessage(""); // Reset success message
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      try {
        setIsLoading(true); // Start loading
        const response = await fetch('https://school-backend-eight.vercel.app/api/v1/auth/login', { // Replace with your API endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        setIsLoading(false); // Stop loading

        if (response.ok) {
          // Save the token in localStorage
          localStorage.setItem('token', data.token);

          // Save user data (optional)
          localStorage.setItem('user', JSON.stringify(data.user));

          // Show success message
          setSuccessMessage("Login successful! Redirecting...");
          
          // Redirect to home or dashboard after 2 seconds
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          // Handle API errors
          setApiError(data.message || "Login failed. Please try again.");
        }
      } catch (error) {
        setIsLoading(false);
        setApiError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="conainer">
      <div className="mixed">
        <div className="form-conainer">
          <h1>Welcome to School Team</h1>
          <form onSubmit={handleSignIn}>
            {/* Email Input */}
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
            <small style={{ color: 'red' }}>{emailError}</small>

            {/* Password Input */}
            <div className="input-with-icon">
              <Lock className="input-icon" />
              <input
                style={{ borderRadius: '30px', width: "100%", border: "2px double #000", paddingLeft: '40px' }}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              <span
                style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <EyeSlash /> : <Eye />}
              </span>
            </div>
            <small style={{ color: 'red' }}>{passwordError}</small>

            {/* API Error Message */}
            {apiError && <p style={{ color: 'red', marginTop: '10px' }}>{apiError}</p>}
            
            {/* Success Message */}
            {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}

            {/* Submit Button */}
            {isLoading ? (
              <button disabled>Loading...</button>
            ) : (
              <button type="submit">Login</button>
            )}

            {/* Forgot Password Link */}
            <NavLink to="/forgot-password" className="forgot-password-link">Forgot Password?</NavLink>
          </form>
        </div>
        
        {/* Image Section */}
        <div className="image-containennt">
          <img src={img} alt="Student" />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
