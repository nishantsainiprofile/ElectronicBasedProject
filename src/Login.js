import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./UseContext";

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [loginMessage, setLoginMessage] = useState("");
  const { setLoginState , SelectElectronicOption } = useContext(MyContext); // Access setLoginState directly
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
   
 
  console.log(SelectElectronicOption);
  

  const handleLogin = () => {
    // Basic validation
    if (!inputEmail.current.value || !inputPassword.current.value) {
      setLoginMessage("Please fill in both fields.");
      return;
    }

    setLoading(true); // Show loading spinner while the request is being processed
    axios
      .post("http://localhost:5002/api/Login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      })
      .then((response) => {
        setLoginMessage(response.data.Information);

        if (response.data.Information === "Login Successful") {
          setLoginState(true);
          // Navigate to Home after a short delay
          setTimeout(() => {
            setLoading(false);
            navigate(-1);
          }, 1000);
        } else {
          setLoading(false); // Stop loading if login fails
          setLoginState(false);
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setLoginMessage("An error occurred. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x align-center-middle">
        <div className="cell medium-6 large-4">
          {loginMessage !== "Login Successful" ? (
            <div className="callout">
              <h2 className="text-center">Login</h2>
              <label>
                Enter the email
                <input
                  type="text"
                  placeholder="Enter the user"
                  ref={inputEmail}
                  className="input-group-field"
                />
              </label>
              <label>
                Enter the Password
                <input
                  type="password"
                  placeholder="Enter the password"
                  ref={inputPassword}
                  className="input-group-field"
                />
              </label>
              <p style={{ color: "red" }} className="text-center">
                {loginMessage}
              </p>
              <button
                onClick={handleLogin}
                disabled={loading}
                className="button expanded"
              >
                {loading ? "Logging in..." : "Submit Login"}
              </button>
            </div>
          ) : (
            <div>
              <p className="text-center">{loginMessage}</p>
              {loading ? <p className="text-center">Loading...</p> : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

