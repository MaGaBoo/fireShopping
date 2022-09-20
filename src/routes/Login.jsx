import React, { useState, useContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { AppContext } from "../App";

const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setRoute, setUser } = useContext(AppContext);

  const doLoginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setUser(user);
        toast('Successfully logged in');
        setRoute("home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const doLogin = e => {
    e.preventDefault(); 
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    toast('Successfully logged in');
    setUser(user);  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-sky-700 mb-8">Login</h1>
      <p className="text-sm mb-8">Login with your email accound</p>
      <div className="flex flex-col gap-4 items-center">
      <form onSubmit={doLogin} className="flex flex-col gap-2 max-w-sm">
      <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="pasword" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-sky-600 py-1 text-white rounded shadow hover:bg-sky-800">Login</button>
        <button onClick={doLoginGoogle}>... or login with Google </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
