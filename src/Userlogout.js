import { useContext, useState } from "react";
import { MyContext } from "./UseContext";

function Userlogout() {
  const { setLoginState, LoginState } = useContext(MyContext); // Access setLoginState directly from the context
  const [showLoginMessage, setShowLoginMessage] = useState(false); // State to show the message when "No" is clicked

  function YesLogout() {
    setLoginState(false); // Set login state to false for logout
    setShowLoginMessage(false); // Hide the login message
    console.log("User logged out:", LoginState);
  }

  function NoLogout() {
    console.log("User stays logged in:", LoginState);
    setLoginState(true); // Set login state to true to stay logged in
    setShowLoginMessage(true); // Show the login message
  }
  return (
    <div>
      {LoginState ? (
        <div className="grid-container">
          <div className="grid-x align-center">
            <div className="cell medium-6 large-4">
              <div className="callout text-center">
                <h3>Are you sure you want to log out?</h3>
                <div className="button-group align-center">
                  <button onClick={YesLogout} className="button alert">
                    Yes
                  </button>
                  <button onClick={NoLogout} className="button secondary">
                    No
                  </button>
                </div>
                {showLoginMessage && (
                  <div className="callout success">
                    <p>Till you are logged in.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid-container">
          <div className="grid-x align-center">
            <div className="cell medium-6 large-4">
              <div className="callout text-center">
                <h4>You are logged out</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userlogout;



