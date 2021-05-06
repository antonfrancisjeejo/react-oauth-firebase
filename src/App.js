import React, { useState } from "react";
import { auth, provider, fbProvider, githubProvider } from "./firebase";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(provider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };
  const facebookLogin = async () => {
    try {
      await auth.signInWithPopup(fbProvider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  const githubLogin = async () => {
    try {
      await auth.signInWithPopup(githubProvider);
      setUser(await auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);
  return (
    <section>
      <div>
        <div className="buttonContainer" onClick={googleLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
          <button>Google Login</button>
        </div>
        <div className="buttonContainer" onClick={facebookLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""
          />
          <button>Facebook Login</button>
        </div>
        <div className="buttonContainer" onClick={githubLogin}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
            alt=""
          />
          <button>Github Login</button>
        </div>
      </div>
      <h1>{user?.email}</h1>
    </section>
  );
};

export default App;
